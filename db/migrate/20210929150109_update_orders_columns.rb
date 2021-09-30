class UpdateOrdersColumns < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :user_id, :integer, index: true
    add_column :orders, :state, :string, index: true
    remove_column :orders, :email
    remove_column :orders, :name
  end
end
