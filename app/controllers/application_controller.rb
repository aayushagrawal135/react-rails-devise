class ApplicationController < ActionController::Base
  protect_from_forgery except: :sign_out
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |user|
      user.permit(:first_name, :last_name, :email, :secret_code, :password)
    end

    devise_parameter_sanitizer.permit(:account_update) do |user|
      user.permit(:first_name, :last_name, :email, :password, :current_password)
    end
  end

  def redirect_if_not_signed_in
    unless user_signed_in?
      redirect_to new_user_session_path
    end
  end

  # Overwriting the sign_out redirect path method
  def after_sign_out_path_for(resource_or_scope)
    new_user_session_path
  end
end
