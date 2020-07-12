class Api::V1::SecretCodesController < ApplicationController
  def index
    render json: SecretCode.all
  end

  def create
    count = params[:count]
    secret_codes = []
    while count > 0
      secret_code = SecretCode.new()
      secret_code.code = generate_code
      if secret_code.save
        count = count - 1
        secret_codes.push(secret_code)
      end
    end
    render json: secret_codes
  end

  private

  def generate_code
    (0...50).map {('a'..'z').to_a[rand(26)]}.join
  end
end