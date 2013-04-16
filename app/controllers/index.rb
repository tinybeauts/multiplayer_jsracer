get '/' do
  session[:error_message] = nil
  erb :index
end

post '/game' do
  @game = Game.create()

  players = [
    params[:new_game][:player1],
    params[:new_game][:player2],
    params[:new_game][:player3],
    params[:new_game][:player4]
  ].delete_if(&:empty?)

  if players.length >= 2
    players.each do |p|
      @game.players << Player.create(:name => p)
    end

    session[:current_game] = @game.id
    
    if params[:track_length] == ""
      @track_length = 10
    else
      @track_length = params[:track_length].to_i
    end

    erb :game
  else
    session[:error_message] = "Add your racer name so you can brag about your speed!"
    erb :index
  end
end

post "/end_game" do 
  game = Game.find(session[:current_game])
  puts params.inspect
  puts params[:winner]
  game.winner = params[:winner]
  game.win_time = params[:time]
  game.save!
  @game_id = game.id
  erb :winner, :layout => false
end

get "/game/:id" do

  @game = Game.find(params[:id])

  erb :game_stat
end

