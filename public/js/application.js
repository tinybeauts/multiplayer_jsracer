
$(document).ready(function() {
  myGame = new MyGame;
  player1 = new Player(1, $('.player1').attr('id'));
  player2 = new Player(2, $('.player2').attr('id'));
  player3 = new Player(3, $('.player3').attr('id'));
  player4 = new Player(4, $('.player4').attr('id'));
  myGame.start_race();
  $(document).on('keyup', function(event) {
    var key = event.which
    if (key == 16) {  
      player1.update_player_position();
    } else if (key == 13) {
      player2.update_player_position();
    } else if (key == 32) {
      player3.update_player_position();
    } else if (key == 54) {
      player4.update_player_position();
    };
  });

  $('#restart').on('click', function() {
    myGame.start_race();
    $('.race_track h2').remove();
    $(this).hide();
  });

  $('select').on('change', function() { 
    console.log($(this).val());
      if ($(this).val() == '2 Players') {
        $('.3p').attr('type','hidden')
        $('.4p').attr('type','hidden')
      }
      if ($(this).val() == '3 Players') {
        $('.3p').attr('type','text')
        $('.4p').attr('type','hidden')
      }
      if ($(this).val() == '4 Players') {
        $('.3p').attr('type','text')
        $('.4p').attr('type','text')
      }
    });
});
