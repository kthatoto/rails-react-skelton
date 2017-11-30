Rails.application.routes.draw do

  get 'check', to: 'top#check'

  resources :items, only: [:index, :create, :destroy]
end
