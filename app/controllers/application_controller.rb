class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_devise_params, if: :devise_controller?

  protected

  def configure_devise_params

  	devise_parameter_sanitizer.permit(:sign_up) do |user|
  		user.permit(:fullname, :email, :dni, :fewdays, :startday, :endday, :classification, :car, :kindcard, :enrollment, :password, :password_confirmation, :remember_me)
  	end
  	devise_parameter_sanitizer.permit(:account_update) do |user|
  		user.permit(:fullname, :email, :dni, :fewdays, :startday, :endday, :classification, :car, :kindcard, :enrollment, :password, :password_confirmation)
  	end
  end

end
