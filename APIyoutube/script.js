$( function() {
    $( "#tabs" ).tabs();
} );
$( function() {
    $( ".accordion" ).accordion();
} );

let players=[
    { id:'iframe0' , videoId: 'H1OA5EvEv40' },
    { id:'iframe1' , videoId: 'bEr4bupz0Yc' },
    { id:'iframe2' , videoId: '9Fwcl9lJ4GA' },
];

//  Players
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  
  player0 = new YT.Player(players[0].id, {
    height: '270',
    width: '480',
    videoId: players[0].videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  player1 = new YT.Player(players[1].id, {
    height: '270',
    width: '480',
    videoId: players[1].videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  player2 = new YT.Player(players[2].id, {
    height: '270',
    width: '480',
    videoId: players[2].videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  $('#tabTitle0').text('video 01')
  $('#tabTitle1').text('video 02')
  $('#tabTitle2').text('video 03')
  $('#title0').text(player0.playerInfo.videoData.title)
  $('#title1').text(player1.playerInfo.videoData.title)
  $('#title2').text(player2.playerInfo.videoData.title)  
  $('#duration0').text(player0.playerInfo.duration+" segundos")
  $('#duration1').text(player1.playerInfo.duration+" segundos")
  $('#duration2').text(player2.playerInfo.duration+" segundos")
  $('#link0').text(player0.playerInfo.videoUrl)
  $('#link1').text(player1.playerInfo.videoUrl)
  $('#link2').text(player2.playerInfo.videoUrl)
  setTimeout(() => {
    $('#autor0').append(player0.playerInfo.videoData.author)
    $('#autor1').append(player1.playerInfo.videoData.author)
    $('#autor2').append(player2.playerInfo.videoData.author)    
  }, 1000);
}

let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {    
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

$('#tabTitle0').click(function(){
  player1.stopVideo();
  player2.stopVideo();
})

$('#tabTitle1').click(function(){
  player0.stopVideo();
  player2.stopVideo();
})

$('#tabTitle2').click(function(){
  player1.stopVideo();
  player0.stopVideo();
})