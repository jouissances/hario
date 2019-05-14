class CreateTools < ActiveRecord::Migration[5.2]
  def change
    create_table :tools do |t|
      t.string :tool
      t.text :short_description
      t.text :long_description
      t.belongs_to :trainer, index: true
    end
  end
end
