Rails.application.routes.draw do
  # root "registrations#new"

  devise_for :users,
            path: '',
            path_names: {
              sign_in: 'login', 
              sign_out: 'logout', 
              edit: 'profile', 
              sign_up: 'registration'
            }, 
            controllers: {
              registrations: 'registrations'
            }


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "guests#index"

  resources :guests 


  get 'ready' => 'guests#ready'
end
