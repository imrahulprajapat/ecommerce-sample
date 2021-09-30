class Brand < ApplicationRecord
  has_many :products, dependent: :destroy
  validates :name, uniqueness: true
end
