							//creamos el servicio con todos los módulos necesario
							//creamos un servicio inyectable
import { Injectable } from '@angular/core';

							//importamos para hacer peticiones AJAX y HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';

							//importamos la librería ReactiveX observable que ya la incluye angular
							//es una API para programación asincrona con observable stream
							// es decir- controlaremos el flujo
import { Observable } from 'rxjs/observable';

							//importamos nuestro Projecto (modelo) que acabamos de hacer
import { Project } from '../models/project';

							//importamos nuestro archivo de configuración global con la URL
import { Global } from './global';



							//Con el decorador inyectable , exportamos la clase - servicio
							//con la url de donde alojaremos la appi

@Injectable()

export class ProjectService{

							//Objeto donde guardaremos la url de la API

	public url:string;


							//en el constructor le damos un valor a la url con la configuración Global
	
	constructor( private _http: HttpClient ){
		this.url = Global.url;
	}


							/* Creamos un método de prueba*/	
	testService(){
		return 'Probando el servicio de Angular';
	}



										/* 20    <-->	Creamos el método de grabado*/	
	saveProject(project: Project): Observable<any>{

		let params = JSON.stringify(project);

		let headers = new HttpHeaders().set('Content-Type', 'application/json');
	
		return this._http.post(this.url+'save', params, {headers: headers});
	}

	getProjects():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'aplication.json');
		return this._http.get(this.url+'find', {headers: headers});
	} 



}