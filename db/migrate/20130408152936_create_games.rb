class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |g|
      g.string :winner
      g.boolean :finished, :default => false
      g.integer :win_time
      g.timestamps
    end
  end
end
