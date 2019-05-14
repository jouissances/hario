Rails.application.routes.draw do
  scope '/api' do
    resources :logs
    resources :trainers
    resources :tools
    resources :services
    resources :clients
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
