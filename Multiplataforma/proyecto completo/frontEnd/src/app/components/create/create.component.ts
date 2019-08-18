import { Component, OnInit } from '@angular/core';

		// Importamos el modelo y el servicio que creamos

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';


													//      23
import { UploadService } from '../../services/upload.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],



  		//cargamos el servicio			//23
  providers: [ProjectService, UploadService],
})



export class CreateComponent implements OnInit {



					//Creamos propiedades para el título 
	public title: string;
					//Otro para el objeto que modificará el formulario (de tipo project)
	public project: Project;
					//Objeto para enviar mensaje de éxito en la grabación 
	public status: string;

											//23  	Objeto con el archivo
	public filesToUpload: Array<File>;




  constructor(
						//creamos las propiedades del servicio
  		private _projectService: ProjectService,

  												//23
  		private _uploadService: UploadService ) { 


						//Pasamos el título
		this.title = "Crear proyecto";

						//Les damos valor a esas propiedades del modelo y se las pasamos con datos en blanco
						//que se sustituirán despues por los datos que se almacenarán en el documento de la DB
						//_id, name, description, category,langs,year, image

		this.project = new Project('','','','',1975,'','');


  }

  ngOnInit() {
  }




						//  Método onSubmit que recibe por parámetro el formulario (form) 
  	onSubmit(form){
		console.log(this.project);



																	//	21     
		this._projectService.saveProject(this.project).subscribe(
		response => {



											//Validamos si se grabo con éxito y lo usamos en el create.Component.html
											// luego metemos ese mensaje de éxito en 
			if (response.project){
			/*	this.status = "success";
				form.reset();     */

																//filtramos lo que pcupamos de todo lo que arroja el input
		this._uploadService.makeFileRequest(Global.url+"upload/"+response.project._id, [], this.filesToUpload, 'image')
				.then((result:any) => {
					console.log(result);
					this.status = "success";
					form.reset();
				});


			}
			else
			{
				this.status="failed";
			}

		},




/*   SUstituimos esto por lo arriba


				console.log(response);
			},

*/

				error =>
			{
				console.log(<any>error);
			}

		);

	}





												//23
	fileChangeEvent(fileInput: any){

												//Esto es para ver lo que manda al seleccionar el archivo
		//console.log(fileInput);
		this.filesToUpload = <Array<File>>fileInput.target.files;

	}

}
