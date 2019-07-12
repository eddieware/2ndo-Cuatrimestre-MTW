var pageToken={};

$(function(){
   
    $('.popUp').hide();
    $('.overlayBg').hide();

   
    $('#searchButton').click(function(){
        searchYoutube();
    });

   
    $('.tokenClass').click(function(){
        pageToken.current = $(this).val()=='Siguiente'? 
                            pageToken.nextPage : 
                            pageToken.prevPage ;
        searchYoutube();
    });

   
    $('#output').on('click','.thumbnail',function(){
        
        $('.overlayBg').click(function(){
            $('.popUp').hide();
            $('.overlayBg').hide();
        });

      
      $('.popUp').show();
      $('.overlayBg').show();
      $(window).scrollTop(0);
      $('.popUp iframe').attr('src','https://www.youtube.com/embed/'+$(this).attr('videoID'));
    })
});


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
   
    .done(function(data){
        pageToken.nextPage = data.nextPageToken;
        pageToken.prevPage = data.prevPageToken;
        var html="";

       
        $.each(data['items'], function(index,value){
            html+='<div><div class="title">'+value.snippet.title+'</div>';
            html+='<div class="url"><a href="https://www.youtube.com/watch?v='
                    +value.id.videoId+'" target="_blank">'+value.id.videoId+'</a></div>';
            html+='<div><img class="thumbnail" src="'+value.snippet.thumbnails.medium.url+
                    '" videoID="'+value.id.videoId+'"></div>';
            html+='</div>';
        });

        
        $('#output').html(html);
    });
};
