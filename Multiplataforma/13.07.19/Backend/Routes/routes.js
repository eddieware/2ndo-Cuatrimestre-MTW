'use strict'
var express=require('express');
var ProjectController=require('../Controllers/controllers');
var router =express.Router();


router.get('/home',ProjectController.home); //darle una funcionalidad en el controlador
router.post('/test',ProjectController.test);//post
router.post('/save',ProjectController.save);//save en el controler
			//Llamamos a la ruta del metodo de busqueda de info y le pasamos la id, 
			// Puede ser obligatorio                        '/search/:id'
			//U opcional y debe validarse en el control     '/search/:id?'
router.get('/search/:id?', ProjectController.search);
			//Llamamos a la ruta del metodo de litado
router.get('/find', ProjectController.find);
			//Llamamos a la ruta del metodo de actualización: put dentro del postman
router.put('/update/:id', ProjectController.update);
			//Llamamos a la ruta del metodo de borrado
router.delete('/delete/:id', ProjectController.delete);



module.exports=router;