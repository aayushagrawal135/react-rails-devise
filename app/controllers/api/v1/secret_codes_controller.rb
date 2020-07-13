class Api::V1::SecretCodesController < ApplicationController
  #before_action :authenticate_user!
  before_action :user_sign_in_check


  def index
    render json: SecretCode.all
  end

  def create
    count = params[:count]
    secret_codes = SecretCode.get_secret_codes(count)
    render json: secret_codes
  end
end