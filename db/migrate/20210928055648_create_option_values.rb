class CreateOptionValues < ActiveRecord::Migration[6.1]
  def change
    create_table :option_values do |t|
      t.string :name
      t.references :option_type
      
      t.timestamps
    end
  end
end
