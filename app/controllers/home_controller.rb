class HomeController < ApplicationController
  before_action :authenticate_user!
  def index
  end

  before_action :authenticate_user!
  def arena
    @server_busy = true

    x = 0
    y = 0

    while x < 8
      while y < 4
        if $arenas[x][:players][y] == nil
          current_user[:server] = x
          @server_busy = false
          break
        end

        y += 1
      end

      x += 1
    end
  end

  before_action :authenticate_user!
  def leaderboard
  end

  def privacy
  end
end
