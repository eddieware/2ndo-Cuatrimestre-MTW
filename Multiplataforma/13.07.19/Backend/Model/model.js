'use strict'
var mongoose =require('mongoose');
var Schema=mongoose.Schema;
var projectSchema=Schema{
	name:String,
	description:String,
	category:String,
	langs:String,
	year:Number,
	image:String
}