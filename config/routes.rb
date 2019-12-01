Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/cards', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :cards
    end
  end
end
