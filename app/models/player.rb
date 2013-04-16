class Player < ActiveRecord::Base
  has_and_belongs_to_many :games
  validate :name, :prescence => true

end
