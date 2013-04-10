get '/' do
  # Look in app/views/index.erb
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

  players.each do |p|
    @game.players << Player.create(:name => p)
  end

  session[:current_game] = @game.id
  @track_length = params[:track_length].to_i

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

