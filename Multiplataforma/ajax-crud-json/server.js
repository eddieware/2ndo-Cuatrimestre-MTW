var express = require('express');
var app = express();
var parseJson = require('body-parser');

var articulos = [
{
    id: 1,
    nombre: 'Pala'
},
{
    id: 2,
    nombre: 'Martillo'
}
];
//var articulos = [];

var idActual = 2;

var Puerto = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(parseJson.json());

app.get('/articulos', function(req, res) {
    res.send({ articulos: articulos });
});


app.post('/articulos', function(req, res) {
    var nombreArticulo = req.body.nombre;
    idActual++;

    articulos.push({
        id: idActual,
        nombre: nombreArticulo
    });

    res.send('Se agrego un registro exitosamente');
});


app.put('/articulos/:id', function(req, res) {
    var id = req.params.id;
    var nombreNuevo = req.body.nombreNuevo;

    var encontrado = false;

    articulos.forEach(function(articulo, index) {
        if (!encontrado && articulo.id === Number(id)) {
            articulo.nombre = nombreNuevo;
        }
    });

    res.send('Se actualizo un registro exitosamente');
});


app.delete('/articulos/:id', function(req, res) {
    var id = req.params.id;

    var encontrado = false;

    articulos.forEach(function(articulo, index) {
        if (!encontrado && articulo.id === Number(id)) {
            articulos.splice(index, 1);
        }
    });

    res.send('Se borro un registro con exito');
});


app.listen(Puerto, function() {
    console.log('Servidor activo en puerto: ' + Puerto);
});
