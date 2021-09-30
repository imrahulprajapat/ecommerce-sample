class CreateVariantWishlists < ActiveRecord::Migration[6.1]
  def change
    create_table :variant_wishlists do |t|
      t.integer :wishlist_id
      t.integer :variant_id

      t.timestamps
    end
  end
end
