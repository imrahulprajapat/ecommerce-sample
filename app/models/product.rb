class Product < ApplicationRecord
  has_many :option_types, dependent: :destroy
  
  belongs_to :brand

  has_one :master,
    -> { where is_master: true },
    class_name: "Variant",
    inverse_of: :product,
    dependent: :destroy

  has_many :variants,
    -> { where is_master: false },
    inverse_of: :product,
    dependent: :destroy
end
