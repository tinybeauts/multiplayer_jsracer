
var maxPlayers = 4;
var minPlayers = 2;

$(document).ready(function() {

  $('.multiplayer').on('click','button[name="morePlayers"]', function(e) {
    e.preventDefault();
    var players = $('li').first().text();
    var newPlayerNumber = (parseInt(players) + 1);
    if (players < maxPlayers) {
      $('li').first().text(newPlayerNumber);
      changePlayersInput(newPlayerNumber);
    }
    var lighter = $('button[name="more_players"]');
    var darker = $('button[name="less_players"]');
    if (players >= (maxPlayers - 1)) {
      light_blue(lighter, darker);
    } else {
      dark_blue(lighter,darker);
    }
  });

  $('.multiplayer').on('click','button[name="less_players"]', function(e) {
    e.preventDefault();
    var players = $('li').first().text();
    var newPlayerNumber = (parseInt(players) - 1);
    if (players > minPlayers) {
      $('li').first().text(parseInt(players)-1);
      changePlayersInput(newPlayerNumber);
    }
    var lighter = $('button[name="less_players"]');
    var darker = $('button[name="more_players"]');
    if (players <= (minPlayers + 1)) {
      light_blue(lighter, darker);
    } else {
      dark_blue(lighter, darker);
    }
  });

});

var changePlayersInput = function(players) { 
  if (players == 2) {
    $('.3p').attr('type','hidden')
    $('.4p').attr('type','hidden')
  }
  if (players == 3) {
    $('.3p').attr('type','text')
    $('.4p').attr('type','hidden')
  }
  if (players == 4) {
    $('.3p').attr('type','text')
    $('.4p').attr('type','text')
  }
};

var light_blue = function(lighter, darker) {
  lighter.css('background-color', '#bbf2ff');
  lighter.css('border', '5px solid #bbf2ff');
  darker.css('background-color', '#00D0FF');
  darker.css('border', '5px solid #00D0FF');
}

var dark_blue = function(lighter, darker) {
  lighter.css('background-color', '#00D0FF');
  lighter.css('border', '5px solid #00D0FF');
  darker.css('background-color', '#00D0FF');
  darker.css('border', '5px solid #00D0FF');
}
