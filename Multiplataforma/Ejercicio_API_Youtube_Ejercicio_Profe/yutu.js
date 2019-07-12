var pageToken={};

$(function(){
	//Ocultar los popUp donde se despliegua el video
	$('.popUp').hide();
	$('.overlayBg').hide();

	//Función de búsqueda del botón
	$('#searchButton').click(function(){
		searchYoutube();
	});

	//Función de búsqueda de los botones siguiente y atras
	//Hacer notar que aquí va un IF en su forma compacta
	$('.tokenClass').click(function(){
		pageToken.current = $(this).val()=='Siguiente'? 
							pageToken.nextPage : 
							pageToken.prevPage ;
		searchYoutube();
	});

	//ESTA FUNCIÓN Y LA DE ABAJITO LA CREAS HASTA EL FINAL
	//función de mostrar-ocultar al dar clic en las miniaturas o en el fondo
	$('#output').on('click','.thumbnail',function(){
		//Función para ocultar al dar clic en el fondo
		$('.overlayBg').click(function(){
			$('.popUp').hide();
			$('.overlayBg').hide();
		});

	  //Función para mostrar al dar clic en las miniaturas
	  $('.popUp').show();
	  $('.overlayBg').show();
	  $(window).scrollTop(0);
	  $('.popUp iframe').attr('src','https://www.youtube.com/embed/'+$(this).attr('videoID'));
	})
});

//ESTA FUNCIÓN CREALA PRIMERO
//Función de búsqueda, consumimos el JSON aquí
function searchYoutube(){
	$.ajax({
		url:'https://www.googleapis.com/youtube/v3/search',
		dataType:'json',
		type:'GET',
		data:{
			key:'AIzaSyATLmxtLrsZQy8GsWxAvHab4rXTFVXgLhk',
			q:$('#search').val(),
			part:'snippet',
			maxResults:10,
			pageToken: pageToken.current
		}
	})
	//En caso de que se consuma bien el JSON preparamos algunos datos y las miniaturas
	.done(function(data){
		pageToken.nextPage = data.nextPageToken;
		pageToken.prevPage = data.prevPageToken;
		var html="";

		//FUNCIÓN PARA RECORRER LOS DATOS DEL JSON QUE VIENE EN LA DATA
		$.each(data['items'], function(index,value){
			html+='<div><div class="title">'+value.snippet.title+'</div>';

			html+='<div class="url"><a href="https://www.youtube.com/watch?v='
					+value.id.videoId+'" target="_blank">'+value.id.videoId+'</a></div>';

			html+='<div><img class="thumbnail" src="'+value.snippet.thumbnails.medium.url+
					'" videoID="'+value.id.videoId+'"></div>';

			html+='</div>';
		});

		//Pintamos la salida de los 3 datos
		$('#output').html(html);
	});
};
