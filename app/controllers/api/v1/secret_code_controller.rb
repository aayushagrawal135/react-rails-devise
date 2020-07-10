class Api::V1::SecretCodeController < ApplicationController
  def index
    render json: SecretCode.all
  end
end