class AddEmailToSecretCodes < ActiveRecord::Migration[6.0]
  def change
    add_column :secret_codes, :email, :string
  end
end
