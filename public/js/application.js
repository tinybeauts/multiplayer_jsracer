
$(document).ready(function() {
  myGame = new MyGame;
  
  // makePlayers();
  player1 = new Player(1, $('.player1').attr('id'));
  player2 = new Player(2, $('.player2').attr('id'));
  player3 = new Player(3, $('.player3').attr('id'));
  player4 = new Player(4, $('.player4').attr('id'));
  myGame.startRace();
  $(document).on('keyup', function(event) {
    var key = event.which
    if (key == 16) {  
      window['player1'].updatePlayerPosition();
    } else if (key == 13) {
      player2.updatePlayerPosition();
    } else if (key == 32) {
      player3.updatePlayerPosition();
    } else if (key == 54) {
      player4.updatePlayerPosition();
    };
  });

  $('#restart').on('click', function(e) {
    e.preventDefault();
    alert($('.player1').attr('id'));
    myGame.startRace();
    $('.race_track h2').remove();
    $(this).hide();
  });

});

// var makePlayers = function() {
//   var playerCount = $('.race_track').find('ul');
//   debugger;

//   for (i = 0; i <= players; i++) {
//     player = 'player'+i+1;
//     window[player] = new Player(i+1, players[i].id);
//   }

// }
