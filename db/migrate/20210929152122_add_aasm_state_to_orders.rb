class AddAasmStateToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :aasm_state, :string
    remove_column :orders, :state
  end
end
