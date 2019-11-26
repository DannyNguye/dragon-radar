Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :cards, only: [:index]
    end
  end
end
