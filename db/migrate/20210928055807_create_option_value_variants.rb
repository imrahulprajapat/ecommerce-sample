class CreateOptionValueVariants < ActiveRecord::Migration[6.1]
  def change
    create_table :option_value_variants do |t|
      t.references :option_value
      t.references :variant

      t.timestamps
    end
  end
end
