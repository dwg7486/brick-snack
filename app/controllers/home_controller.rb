class HomeController < ApplicationController
  before_action :authenticate_user!
  def index
  end

  before_action :authenticate_user!
  def leaderboard
  end

  def privacy
  end
end
