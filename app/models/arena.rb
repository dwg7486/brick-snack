class Arena
  include Mongoid::Document
  field :players, type: Array

  def mongoize(players)
    case players
    when Arena then players.mongoize
    else players
    end
  end
end
