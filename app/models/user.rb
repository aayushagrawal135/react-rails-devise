class User < ApplicationRecord

  after_create :add_secret_code

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :rememberable, :validatable
          # , :recoverable

  validates :email, uniqueness: true
  validates :secret_code, uniqueness: true

  private

  def add_secret_code
    SecretCode.create(code: self.secret_code, email: self.email)
  end
end
