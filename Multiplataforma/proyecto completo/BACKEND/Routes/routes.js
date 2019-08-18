'use strict'
var express = require('express');
var projectController = require('../Controllers/controllers');
var router = express.Router();

var multi = require('connect-multiparty');
var multiMiddle = multi({uploadDir:'./upload'})

router.get('/home',projectController.home);
router.post('/test',projectController.test);
router.post('/save',projectController.save);
router.get('/find',projectController.find);
// el id al ponerle el ? es opcional
router.get('/search/:id?',projectController.search);
router.delete('/delete/:id?',projectController.delete);
router.put('/update/:id',projectController.update);
router.post('/upload/:id',multiMiddle,projectController.upload);

router.get('/get-image/:image', projectController.getImageFromFile);
module.exports = router;