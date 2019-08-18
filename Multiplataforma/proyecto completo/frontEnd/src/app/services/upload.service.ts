					//Importamos 

import { Injectable } from '@angular/core';
import { Global } from './global';



					//Definimos el servicio y lo exportamos
@Injectable()
export class UploadService{
		public url: string;


					// pasamos la URL
		constructor(){
			this.url = Global.url;
		}



					//Método para hacer una petición ajax para subir el archivo
			makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string)
			{


					//Hacemos una promesa con su función callback con su resolve y su reject
					//Por su se logra o no
				return new Promise(function(resolve, reject){



						//Definimos la petición ajax para subir el archivo simulando un formulario.
					var formData:any = new FormData();

						//Hacemos un objeto de petición asíncrona
					var xhr = new XMLHttpRequest();



						//Hacemos un for para recorrer los posibles archivos que llegan
						// y mientras no se acaben los archivos 
						// los pegamos al formulario con el "name" que llega por parámetro
						// añadimos el archivo y recuperamos su nombre
					for (var i = 0; i < files.length; i++) {
						formData.append(name, files[i], files[i].name);
					}


						//ahora la función ajax, cuando halla un cambio en su estado
						//el primer if valida si se completo
						//el segundo if valida si tuvo exito y en ese caso 
						//parseamos la respuesta del servicio y si no mandamos el reject

					xhr.onreadystatechange = function(){
						if(xhr.readyState == 4){
							if (xhr.status == 200) {
								resolve(JSON.parse(xhr.response));
							}
							else{
								reject(xhr.response);	
							}
						}

					}
								//Si todo tuvo exito hacemos la petición (POST)
								//y enviamos el formulario con los archivos que hayan llegado
					xhr.open('POST',url, true);
					xhr.send(formData);
				});

			}
}