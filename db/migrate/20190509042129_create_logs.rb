class CreateLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :logs do |t|
      t.integer :age
      t.string :sex
      t.integer :current_weight
      t.integer :current_height
      t.string :activity_level
      t.string :current_goal
      t.text :results
      t.string :tool
      t.timestamps
    end
  end
end
