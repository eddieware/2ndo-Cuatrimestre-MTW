var pageToken={};

$(function)(){
    $('.popUp').hide();
    $('.overlayBg').hide();

    $('#searchYoutube').click(function(){
        searchYoutube();
    })
    $('tokenClass').click(function(){
        
    })
}

function searchYoutube(){
    $.ajax({
        url:'https://www.googleapis.com/youtube/v3/search',
        dataType: 'json',
        type: 'GET',
        data:{
            key:'',
            q:$('#search').val(),
            part:'snippet',
            maxResults:5,
            pageToken:pageToken.current
        }
    })
    .done(function(data){
        pageToken.nextPage = data.nextPageToken;
        pageToken.prevPage = data.prevPageToken;
        var html="";

        $.each(data['item'], function(index,value){
        html+='<div> <div class="title">'+value.snippet.title+'</div>';
        html+='<div class="url"><a href="https://www.youtube.com/watch?v='
        +value.id.videoId+'" target="_blank">'+value.id.videoId+'</a></div>';
        
        html+='<div> <img class="thumbnails" src="'+value.snippet.thumbnail.medium.url+'" videoId="'+value/////
    }
    })
}