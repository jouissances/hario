class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :service
      t.text :service_description
      t.belongs_to :trainer, index: true
    end
  end
end
