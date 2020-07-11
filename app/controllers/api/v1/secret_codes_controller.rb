class Api::V1::SecretCodesController < ApplicationController
  def index
    render json: SecretCode.all
  end

  def create
    count = params[:count]
    while count > 0
      secret_code = SecretCode.new()
      secret_code.code = generate_code
      if secret_code.save
        count = count - 1
      end
    end
  end

  private

  def generate_code
    (0...50).map {('a'..'z').to_a[rand(26)]}
  end
end