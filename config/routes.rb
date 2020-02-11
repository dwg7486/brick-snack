Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'

  get '/arena', to: 'home#arena'
  get '/leaderboard', to: 'home#leaderboard'
  get '/privacy', to: 'home#privacy'
end
