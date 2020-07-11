Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
      get 'secret_codes', to: 'secret_codes#index'
      post 'secret_codes', to: 'secret_codes#create'
    end
  end
end
