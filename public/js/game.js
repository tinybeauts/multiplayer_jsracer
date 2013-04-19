var MyGame = function(){};

MyGame.prototype.endGame = function(player, time) {
  $.ajax({
    url: "/end_game",
    type: "post",
    data: {winner: player, time: time},
    success: function(data){
      $('.race_track').append(data);
    }
  });
} 

MyGame.prototype.startRace = function() {
  myGame.countdown();
  myGame.resetTrack();
  myGame.startClock();
  Player.hasWon = false;
  Player.position = 1;

}

MyGame.prototype.countdown = function() {
  $('.countdown').show();
  $('.race_track').hide();
  var counter = 3;
  $('.countdown').text(counter).css('font-size', '40em');
  var countdown = setInterval(function() {
    counter--;
    if (counter == 0) {
      $('.countdown').text('GO!').css('font-size', '15em');
    } else if (counter == -1) {
      $('.countdown').hide();
      $('.race_track').show();
      clearInterval(countdown);
    } else {
      $('.countdown').text(counter).css('font-size', '40em');
    }
  }, 1000)
}

MyGame.prototype.resetTrack = function() {
  $('#game_stats').remove();
  $('#restart').hide();
  $('#new_players').hide();
  $('.race_track li').removeClass('active');
  $('.race_track li:nth-child(1)').addClass('active');
}

MyGame.prototype.startClock = function() {
  this.started = false;
  this.startTime = new Date().getTime();
}