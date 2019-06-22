$(function() {
//Función GET	
	$('#btnLeer').on('click', function(){
		//Esta es solo una prueba de que si está 
		//conectado el JQUERY con HTML
		
		/*console.log('Prueba'); */

		$.ajax({
			url: 'articulos',
			contentType: 'application/json',
			success: function(response){
				// Este es solo para probar la conexión
				//console.log(response);

				var llenarTabla = $('tbody');
				llenarTabla.html('');
                response.articulos.forEach(function(articulos) {
                    llenarTabla.append('\
                        <tr>\
                            <td class="id">' + articulos.id + '</td>\
                            <td><input type="text" class="name" value="' + articulos.nombre + '"></td>\
                            <td>\
                                <button class="btnActualizar">Actualizar</button>\
                                <button class="btnBorrar">Borrar</button>\
                            </td>\
                        </tr>\
                    ');
                });
			}
		});
	});


//Función POST
    $('#frmCrear').on('submit', function(event) {
        event.preventDefault();
        var crearDato = $('#crearEntrada');
        $.ajax({
            url: '/articulos',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: crearDato.val() }),
            success: function(response) {
                console.log(response);
                crearDato.val('');
                $('#btnLeer').click();
            }
        });
    });



});