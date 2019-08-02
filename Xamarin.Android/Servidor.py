import websockets
import asyncio
import sys
import signal
import json
import logging

#init es nuestro main-- USERS-- CONJUNTO VACIO 
logging.basicConfig()
class Servidor:
	def _init_(self,host,port):
		self.USERS=set()

	async def escuchandoPeticiones(self,websocket,path):
		nombre_usuario='nombre_prueba'
		abierto=True
		print("Conexión aceptada")
		try:
			#Para hacer lectura del websocket:orotocolo hecho sobre https
			async for message in websocket:
				data=json.loads(message)
				#'type'--> es nuestra key tres valores nuevo_usuario,mensaje y evento
				if data['type']=='nuevo_usuario':
					nombre_usuario=data['nombre']
					#self es similar al this... para usar un metodo de la misma clase, await dentro de un async siempre....esperar a que se registre el usuario y poder mandar el mensaje y no exista un error
					await self.registre(websocket,nombre_usuario)
				elif data['type']=='message':
					await self.notificar_mensaje_a_usuarios(data['contenido'],nombre_usuario)
				elif data['type']=='evento':
					print(f"{nombre_usuario}:{data}")
					if data['type']=='salir':
						#pass
						abierto=False
						#saca y quita de la lista de registro
						await self.unregister(websocket,nombre_usuario,not abierto)
						break


				else:#para textear
					logging.error("evento no soportado: {}", data)
				print(f"{nombre_usuario}:{data}")#que imprima cada que el usuario mande un mensaje

		finally:
			await self.unregister(websocket,nombre_usuario,abierto)

		async def register (self,websocket,nombre_usuario):
			self.USERS.add(websocket)
			await self.notificar_entrada_usuario(nombre_usuario)

		async def unregister(self,websocket,nombre_usuario,abierto):
			if abierto:
				print('eliminado socket')
				try:
					self.USERS.remove(websocket)
					await self.notificar_salida_usuario(nombre_usuario)
				finally:
					pass#para que no haga nada

		async def notificar_entrada_usuario(self,nombre_usuario):
			if self.USERS:
				mensaje=self.estado_usuario('entrada_usuario,nombre_usuario')
				#asyncio comunicacion remota
				await asyncio.wait([user.send(mensaje)for user in self.USERS])

		async def notificar_salida_usuario(self,nombre_usuario):
			if self.USERS:
				mensaje=self.estado_usuario('salida_usuario,nombre_usuario')
				#asyncio comunicacion remota
				await asyncio.wait([user.send(mensaje)for user in self.USERS])

		async def notificar_mensaje_a_usuarios(self,nombre_usuario):
			if self.USERS:
				mensaje=self.mensaje_usuario('msj,nombre_usuario')
				#asyncio comunicacion remota
				await asyncio.wait([user.send(mensaje)for user in self.USERS])

		async def estado_usuario(self,type,nombre_usuario):
			if type=="entrada_usuario":
				#dumps para vaciar a json un diccionario en python
				return json.dumps({'type':'evento','accion':'entrar','nombre_usuario':nombre_usuario})
			elif type=="salida_usuario":
				return json.dumps({'type':'evento','accion':'salir','nombre_usuario':nombre_usuario})

		async def mensaje_usuario(self,msj,nombre_usuario):
			return json.dumps({'type':'mensaje','contenido':msj,'nombre_usuario':nombre_usuario})

            #servidor = Servidor('localhost',8000) en la linea de abajo poner la ip entre ''
            servidor= Servidor('192.68.130.108')
            asyncio.get_event_loop().run_until_complete(websocket.serve(servidor.escuchandoPeticiones,'192.168.1.73',8000))#ip remotas
	        asyncio.get_event_loop().run_forever()


 
                            
