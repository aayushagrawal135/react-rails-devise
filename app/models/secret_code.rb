class SecretCode < ApplicationRecord

  def self.get_secret_codes(count)
    (1..count).map {SecretCode.create(code: generate_code)}
  end

  private

  def self.generate_code
    (0...50).map {('a'..'z').to_a[rand(26)]}.join
  end
end
