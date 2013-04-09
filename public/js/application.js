
$(document).ready(function() {
  myGame = new MyGame;
  player1 = new Player(1, $('.player1').attr('id'));
  player2 = new Player(2, $('.player2').attr('id'));
  myGame.start_race();
  $(document).on('keyup', function(event) {
    var key = event.which
    if (key == 16) {  
      player1.update_player_position();
    } else if (key == 13) {
      player2.update_player_position();
    };
  });

  $('#restart').on('click', function() {
    myGame.start_race();
    $('.race_track h2').remove();
    $(this).hide();
  });
});
