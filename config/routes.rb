Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :favorites, only: [:create, :show, :destroy]
      resources :manager, only: [:show, :update]
    end
    resources :hours, only: [:show, :update]
    resources :seatings, only: [:create, :show, :update, :destroy] do
      get "search", on: :collection
    end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :create, :show, :update, :destroy] do
      get "search", on: :collection
    end
    resources :reviews, only: [:index, :create, :show, :destroy]
    resources :cities, only: [:index, :show]
    resources :reservations, only: [:index, :create, :show, :destroy] do
      get "search", on: :collection
    end
    resources :hours, only: [:show, :update]
  end
end
