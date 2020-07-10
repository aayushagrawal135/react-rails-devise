class RemoveUserIdFromSecretCodes < ActiveRecord::Migration[6.0]
  def change
    remove_column :secret_codes, :user_id, :integer
  end
end
