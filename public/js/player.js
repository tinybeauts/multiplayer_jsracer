var Player = function(number, name) {
  this.position = 1;
  this.number = number;
  this.my_name = name;
}

Player.prototype.update_player_position = function() {
  if (Player.has_won) return;
  this.position++;
  $('.player'+this.number+' li').removeClass('active');
  var select = '.player'+this.number+' li:nth-child('+this.position+')';

  $(select).addClass('active');

  if (this.position >= track_length){
    Player.has_won = true;
    this.end_time = new Date().getTime();
    this.final_time = this.end_time - myGame.start_time - 4400;
    
    $('.race_track').append("<h2>"+this.my_name+" Wins!</h2>");
    myGame.end_game(this.my_name, this.final_time);
    
    $('#restart').show();
    $('#new_players').show();
     
  };
}

