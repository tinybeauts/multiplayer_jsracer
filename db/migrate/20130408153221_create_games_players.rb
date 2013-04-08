class CreateGamesPlayers < ActiveRecord::Migration
  def change
    create_table :games_players, :id => false do |gp|
      gp.references :game
      gp.references :player
    end
    add_index(:games_players, [:game_id, :player_id], :unique => true)
  end
end
