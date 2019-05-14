class CreateTrainers < ActiveRecord::Migration[5.2]
  def change
    create_table :trainers do |t|
      t.string :name
      t.text :description
      t.string :email
      t.string :phone
      t.string :facebook
      t.string :instagram
      t.string :linkedin
    end
  end
end
