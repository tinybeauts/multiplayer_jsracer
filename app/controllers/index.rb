get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/game' do
  player1 = Player.create(:name => params[:new_game][:player1])
  player2 = Player.create(:name => params[:new_game][:player2])
  @track_length = params[:new_game][:track_length].to_i
  game = Game.create()
  game.players << player1
  game.players << player2

  session[:current_game] = game.id

  @player1_name = params[:new_game][:player1]
  @player2_name = params[:new_game][:player2]
  erb :game
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

