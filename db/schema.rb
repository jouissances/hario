# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_10_074653) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "short_bio"
    t.text "clients_memo"
    t.text "trainers_memo"
    t.text "result"
    t.string "image_url"
    t.bigint "trainer_id"
    t.index ["trainer_id"], name: "index_clients_on_trainer_id"
  end

  create_table "logs", force: :cascade do |t|
    t.integer "age"
    t.string "sex"
    t.integer "current_weight"
    t.integer "current_height"
    t.string "activity_level"
    t.string "current_goal"
    t.text "results"
    t.string "tool"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.string "service"
    t.text "service_description"
    t.bigint "trainer_id"
    t.index ["trainer_id"], name: "index_services_on_trainer_id"
  end

  create_table "tools", force: :cascade do |t|
    t.string "tool"
    t.text "short_description"
    t.text "long_description"
    t.bigint "trainer_id"
    t.index ["trainer_id"], name: "index_tools_on_trainer_id"
  end

  create_table "trainers", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "email"
    t.string "phone"
    t.string "facebook"
    t.string "instagram"
    t.string "linkedin"
  end

end
