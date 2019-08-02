'use strict'

const express=require('express');
const app =express();

var project_routes=require('../Routes/routes');
app.use(express.urlenconded({extended:true}));
app.use(express.json());
app.use('/api',project_routes);

module.exports=app;