Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'timers#index'
  get 'timers/index' => 'timers#index'
  # get  'timers/index' => 'timers#start'
  # get  'timers/index' => 'timers#stop'
  get 'timers/new' => 'timers#new'
  post 'timers/result' => 'timers#result'
  get 'timers/show' => 'timers#show'
end
