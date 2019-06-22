//Conexión con el servidor express de node-json-server
express = require ('express');
var app = express();
var PORT = process.env.PORT || 3000;

// Variable para cargar el parseo del JSON
var parseJson = require('body-Parser');

//Estructura del JSON en una arreglo
var articulos = [
{
	"id":1,
	"nombre":"Mouse"},
{
	"id":2,
	"nombre":"teclado"	
}
]

// Control del Indice del ID
var idActual = 2;

//Habilitamos el uso de un directorio raíz y del parseo
app.use(express.static(__dirname));
app.use(parseJson.json());


// Este es para probar que está trayendo resultados
/*app.get('/articulos', function(require, response){
	response.send('Exito');
});*/

// Este es para Leer datos del JSON y pasarlos a la tabla
app.get('/articulos', function(require, response){
	response.send({articulos:articulos});
});



// Aquí se realiza el post para agregar datos al JSON

app.post('/articulos', function(req, res) {
    var nombreArticulo = req.body.name;
    idActual++;

    articulos.push({
        id: idActual,
        name: nombreArticulo
    });
    res.send('Successfully created product!');
});



app.listen(PORT, function(){
	console.log('Escuchando en el puerto: ' + PORT);
});