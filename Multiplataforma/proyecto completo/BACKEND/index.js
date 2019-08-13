'use strict'
// conexion con mongodb
const mongoose = require('mongoose');
const port = 3700;
const app = require('./app');

mongoose.Promise = global.Promise;
const mongooseOptions = {
    useNewUrlParser:true
}

mongoose.connect('mongodb://localhost:27017/portafolio',mongooseOptions)
.then(()=>{
    console.log("conexion realizada");
    app.listen(port,function(){
        console.log('servidor iniciado en puerto:', port)
    })
})
.catch(err=>{
    console.log(err);
    process.exit(1);
});
