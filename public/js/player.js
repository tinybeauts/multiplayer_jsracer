var Player = function(number, name) {
  this.position = 1;
  this.number = number;
  this.myName = name;
}

Player.prototype.updatePlayerPosition = function() {
  if (Player.hasWon) return;
  this.currentTime = new Date().getTime();
  if ((myGame.startTime - this.currentTime + 4250) > 0){
    this.position--;
  } else {
    this.position++;
  }
  $('.player'+this.number+' li').removeClass('active');
  var select = '.player'+this.number+' li:nth-child('+this.position+')';

  $(select).addClass('active');

  if (this.position >= trackLength){
    Player.hasWon = true;
    this.endTime = new Date().getTime();
    this.finalTime = this.endTime - myGame.startTime - 4250;
    
    $('.race_track').append("<h2>"+this.myName+" Wins!</h2>");
    myGame.endGame(this.myName, this.finalTime);
    
    $('#restart').show();
    $('#new_players').show();
     
  };
}

