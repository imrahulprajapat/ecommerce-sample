class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :wishlist
  has_one :cart
  has_many :orders
  
  def add_to_wishlist(variant)
    build_wishlist.save! if wishlist.blank?

    existing = wishlist.variants.find_by(variant_id: variant.id)
    unless existing
      wishlist.variants << variant
    end
    save!
  end

end
