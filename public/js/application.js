var make_players = function(players) {
  var i;

  for (i = 0; i <= players; i++) {
    player = 'player'+i+1;
    window[player] = new Player(i+1, players[i].id);
    debugger;
  }

}

$(document).ready(function() {
  myGame = new MyGame;
  
  var players = $('ul.player');
  make_players(players);
  // player1 = new Player(1, $('.player1').attr('id'));
  // player2 = new Player(2, $('.player2').attr('id'));
  // player3 = new Player(3, $('.player3').attr('id'));
  // player4 = new Player(4, $('.player4').attr('id'));
  myGame.start_race();
  $(document).on('keyup', function(event) {
    var key = event.which
    if (key == 16) {  
      window['player1'].update_player_position();
    } else if (key == 13) {
      player2.update_player_position();
    } else if (key == 32) {
      player3.update_player_position();
    } else if (key == 54) {
      player4.update_player_position();
    };
  });

  $('#restart').on('click', function(e) {
    e.preventDefault();
    alert($('.player1').attr('id'));
    myGame.start_race();
    $('.race_track h2').remove();
    $(this).hide();
  });

});
