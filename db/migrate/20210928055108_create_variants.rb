class CreateVariants < ActiveRecord::Migration[6.1]
  def change
    create_table :variants do |t|
      t.string :sku
      t.decimal :price_cents, precision: 32, scale: 16, default: 0.0, null: false
      t.string :price_currency, default: 'INR', null: false
      t.boolean :is_master
      t.references :product
      
      t.timestamps
    end
  end
end
