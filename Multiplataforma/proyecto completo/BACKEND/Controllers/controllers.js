'use strict'
// libreria para acceder al file system
var fs = require('fs');

var Project = require('../Models/models');

var controller={
    home: function(req, res){
        return res.status(200).send({
            message: 'Bienvenido a mi app rest server with MongoDB'
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Ruta de prueba de la peticion post'
        });
    },
    save: function(req, res){
        var project = new Project;
        var params = req.body;

        project.name        = params.name;
        project.description = params.description;
        project.category    = params.category;
        project.langs       = params.langs;
        project.year        = params.year;
        project.image       = null;
        project.save((err,projectStored)=>{
            if(err) return res.status(500).send({message:'Error al grabar el objeto'});
            if(!projectStored) return res.status(404).send({message:'Error al grabar el proyecto'});
            
            return res.status(200).send({project:projectStored});
        });
    },
    find: function(req, res){
        Project.find({}).exec((err, project)=>{
            if(err) return res.status(500).send({message:'Error al devolver los documentos'});
            if(!project) return res.status(404).send({message:'No existen documentos'});
            
            return res.status(200).send({project});
        });
    },
    search: function(req, res){
        var projectId = req.params.id;
        if(projectId==null)
            return res.status(404).send({message:'El documento no existe'});
        
        Project.findById(projectId, (err,project)=>{
            if(err) return res.status(500).send({message:'Error al devolver el documento'});
            if(!project) return res.status(404).send({message:'No existen el documento'});
            
            return res.status(200).send({project});
        });
    },
    delete: function(req, res){
        var projectId = req.params.id;
        if(projectId==null)
            return res.status(404).send({message:'El documento no existe'});
        
        Project.findByIdAndDelete(projectId, (err, projectDeleted)=>{
            if(err) return res.status(500).send({message:'Error al borrar el documento'});
            if(!projectDeleted) return res.status(404).send({message:'No existen el documento'});
            
            return res.status(200).send({project: projectDeleted});
        });
    },
    update: function(req, res){
        var projectId = req.params.id;
        var updateProject = req.body;

        Project.findByIdAndUpdate(projectId, updateProject,{new:true},(err, projectUpdated)=>{
            if(err) return res.status(500).send({message:'Error al modificar el documento'});
            if(!projectUpdated) return res.status(404).send({message:'No existen el documento'});
        
            return res.status(200).send({project: projectUpdated});
        });
    },
    upload: function(req, res) {
        var projectId = req.params.id;
        var fileName = "Archivo de imagen";

        if( req.files ){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extensionSplit = fileName.split('\.');
            var fileExtension = extensionSplit[1];
            //return res.status(200).send({files: fileName});
            if( fileExtension == 'png' || fileExtension == 'jpg' || fileExtension == 'gif')
            {
                Project.findByIdAndUpdate(projectId,{image: fileName},{new:true},(err, projectUpdated)=>{
                    if(err) return res.status(500).send({message: 'La imagen no se pudo subir'});
                    if(!projectUpdated) return res.status(400).send({message:'El documento no existe'});
                    return res.status(200).send({project: projectUpdated});
                });
            }
            else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message: 'Extensión de archivo, no permitida'});
                });
            }
        }
        else{
            return res.status(200).send({message: fileName});
        }
    }
}

module.exports = controller;