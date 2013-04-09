var MyGame = {};

MyGame.update_player_position = function(playerNumber) {
  if (this.game_over) return;

  var classname = '.player'+playerNumber;
  var current_pos = this['current_pos_'+playerNumber];
  current_pos++;
  this['current_pos_'+playerNumber] = current_pos;
  $(classname + ' li').removeClass('active');
  var select = classname+' li:nth-child('+current_pos+')';

  $(select).addClass('active');

  if (current_pos >= this.track_size){
    this.game_over = true;
    this.end_time = new Date().getTime();
    this.final_time = this.end_time - this.start_time;
    if (playerNumber == 1) {
      $('.race_track').append("<h2>"+this.player1_name+" Wins!</h2>");
      this.end_game(this.player1_name,this.final_time);
    } else if (playerNumber == 2) {
      $('.race_track').append("<h2>"+this.player2_name+" Wins!</h2>");
      this.end_game(this.player2_name,this.final_time);
    }
    $('#restart').show();
    $('#new_players').show();
    
  };
}

MyGame.end_game = function(player, time) {
  $.ajax({
    url: "/end_game",
    type: "post",
    data: {winner: player, time: time},
    success: function(data){
      $('.race_track').append(data);
    }
  });
} 

MyGame.start_race = function() {
  MyGame.countdown();
  $('#game_stats').remove();
  $('#restart').hide();
  $('#new_players').hide();
  this.game_over = false;
  this.current_pos_1 = 1;
  this.current_pos_2 = 1;
  this.player1_name = $('.player1').attr('id');
  this.player2_name = $('.player2').attr('id');
  this.track_size = $("li").length / 2;
  $('.race_track li').removeClass('active');
  $('.race_track li:nth-child(1)').addClass('active');
  this.start_time = new Date().getTime();
}

MyGame.countdown = function() {
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

$(document).ready(function() {
  MyGame.start_race();
  $(document).on('keyup', function(event) {
    var key = event.which
    if (key == 16) {  
      MyGame.update_player_position(1);
    } else if (key == 13) {
      MyGame.update_player_position(2);
    };
  });

  $('#restart').on('click', function() {
    MyGame.start_race();
    $('.race_track h2').remove();
    $(this).hide();
  });
});
