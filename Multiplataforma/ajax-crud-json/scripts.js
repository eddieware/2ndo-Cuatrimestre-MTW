$(function() {
    // Consumir JSON - GET
    $('#btnLeer').on('click', function() {
        $.ajax({
            url: '/articulos',
            method: 'GET',
            contentType: 'application/json',
            success: function(response) {
                var tablaJson = $('tbody');

                tablaJson.html('');

                response.articulos.forEach(function(articulo) {
                    tablaJson.append('\
                        <tr>\
                            <td class="id">' + articulo.id + '</td>\
                            <td><input type="text" class="nombre" value="' + articulo.nombre + '"></td>\
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

    // Agregar registros al JSON
    $('#frmCrear').on('submit', function(event) {
        event.preventDefault();

        var crearDato = $('#crearEntrada');

        $.ajax({
            url: '/articulos',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ nombre: crearDato.val() }),
            success: function(response) {
                console.log(response);
                crearDato.val('');
                $('#btnLeer').click();
            }
        });
    });

    // UPDATE/PUT
    $('table').on('click', '.btnActualizar', function() {
        var filaTabla = $(this).closest('tr');
        var id = filaTabla.find('.id').text();
        var nombreNuevo = filaTabla.find('.nombre').val();

        $.ajax({
            url: '/articulos/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ nombreNuevo: nombreNuevo }),
            success: function(response) {
                console.log(response);
                $('#btnLeer').click();
            }
        });
    });

    // DELETE
    $('table').on('click', '.btnBorrar', function() {
        var filaTabla = $(this).closest('tr');
        var id = filaTabla.find('.id').text();

        $.ajax({
            url: '/articulos/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#btnLeer').click();
            }
        });
    });
});
