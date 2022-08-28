Rails.application.routes.draw do
  resources :trades, only: [:index, :create] do
    collection do
      get :all
    end
  end

  root "trades#index"
end
