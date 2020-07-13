class Api::V1::SecretCodesController < ApplicationController
  #before_action :authenticate_user!
  before_action :redirect_if_not_signed_in

  def index
    render json: SecretCode.all
  end

  def create
    count = params[:count]
    secret_codes = SecretCode.get_secret_codes(count)
    render json: secret_codes
  end

  def is_signed_in
    render json: user_signed_in?
  end

  def logout
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    redirect_to new_user_session_path
  end

end