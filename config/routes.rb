R20130225Atm::Application.routes.draw do
  get '/atm' => 'home#atm'
  root :to => 'home#index'
end
