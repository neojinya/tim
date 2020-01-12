Rails.application.routes.draw do
  root 'timers#index'
  get 'timers/index' => 'timers#index'
end
