class Api::V1::SecretCodesController < ApplicationController
  def index
    render json: SecretCode.all
  end
end