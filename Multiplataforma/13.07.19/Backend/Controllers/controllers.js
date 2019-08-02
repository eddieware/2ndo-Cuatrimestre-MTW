'use strict'
var Project=require('../Model/model');
var controller={
	home:function(req,res){
		return res.status(200).send({
			message:'Bienvenido a mi app rest server'
		});
	},

	test:function(req,res){
		return res.status(200).send({
			message:'Ruta de prueba de la app'
		});

	},


	save:function(req,res){
	
		var project = new Project;
				//Recojemos los parametros del body de la petición
		var params = req.body;
		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.image = null;

		//Ahora si guardamos en la DB con el método save
		project.save((err,projectStored) => {
		if (err) return res.status(500).send({message: 'Error al grabar el objeto'});
		if (!projectStored) return res.status(404).send({message: 'Error al grabar el projecto'});

		//Si todo sale bien DEVOLVEMOS EL    projectStored DENTRO DE UNA PROPIEDAD project
		//Asi mandamos el objeto que se guardará,    si quitamos el   project   mandaría
		//el projectStored como una propiedad y no con el contenido de los datos
		return res.status(200).send({project: projectStored});
			});
	},

	delete:function(req,res){
		var projectid=req.params.id;
		Project.findByIdAndDelete(projectid,(err,projecDeleted)=>{
				if (err) return res.status(500).send({message: 'Error al grabar el objeto'});
				if (!projecDeleted) return res.status(404).send({message: 'Error al grabar el projecto'});
				return res.status(200).send({project: projecDeleted});
				});
	}

	update:function(req,res){
		var projectid=req.params.id;
		var updateProject=req.body;
		Project.findByIdAndUpdate(projectid,updateProject,{new:true},(err,projectUpdate)=>{
			if (err) return res.status(500).send({message: 'Error al modificar el documento'});
				if (!projectUpdate) return res.status(404).send({message: 'Error al grabar el projecto'});
				return res.status(200).send({project: projectUpdate});

		});
	}



	
}

module.exports=controller;
