class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :short_bio
      t.text :clients_memo
      t.text :trainers_memo
      t.text :result
      t.string :image_url
      t.belongs_to :trainer, index: true
    end
  end
end
