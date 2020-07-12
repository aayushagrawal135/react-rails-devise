class Api::V1::SecretCodesController < ApplicationController
  def index
    render json: SecretCode.all
  end

  def create
    count = params[:count]
    secret_codes = SecretCode.get_secret_codes(count)
    render json: secret_codes
  end
end