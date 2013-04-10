var MyGame = function(){};

MyGame.prototype.end_game = function(player, time) {
  $.ajax({
    url: "/end_game",
    type: "post",
    data: {winner: player, time: time},
    success: function(data){
      $('.race_track').append(data);
    }
  });
} 

MyGame.prototype.start_race = function() {
  myGame.countdown();
  $('#game_stats').remove();
  $('#restart').hide();
  $('#new_players').hide();
  Player.has_won = false;
  Player.position = 1;
  $('.race_track li').removeClass('active');
  $('.race_track li:nth-child(1)').addClass('active');
  this.started = false
  this.start_time = new Date().getTime();
}

MyGame.prototype.countdown = function() {
  $('.countdown').show();
  $('.race_track').hide();
  var counter = 2;
  var countdown = setInterval(function() {
    $('.countdown').text(counter);
    counter--;
    // alert(counter);
    if (counter == -1) {
      $('.countdown').text('GO!').css('font-size', '15em');
    }
    if (counter == -2) {
      $('.countdown').hide();
      $('.race_track').show();
      clearInterval(countdown);
    }
  }, 1000)
}
