# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

trainer = Trainer.create({
    name: 'Harrison Oldridge',
    description: 'I was born in Australia and raised in Hong Kong. I have always loved a wide variety of sports including rugby, boxing, rowing and gymnastics. Having been a trainer in the industry for over 10 years now, I’ve been fortunate to work with a range of clients with different goals and learn from some of the best and brightest in the industry. I moved to Singapore 3 years ago to help manage Bukit Timah and South Buona Vista and I’ve been having an absolute blast ever since. I love Singapore, F45 and all the amazing people I get to work with since joining!',
    email: 'harrisonoldridge1@gmail.com',
    phone: '+65 8888 9999',
    facebook: 'HariOldridge',
    instagram: 'hario_spaghettio',
    linkedin: 'harrisonoldridge'
})

clients = Client.create([{
    name: 'Janice Darikho',
    short_bio: 'A happy penguin!',
    clients_memo: "Sometimes it can be useful to export the current data pool of a Rails application into a db/seeds.rb. While writing this book, I encountered this problem in almost every chapter. Unfortunately, there is no standard approach for this. I am showing you what you can do in this case. There are other, more complex scenarios that can be derived from my approach.",
    trainers_memo: "We create our own little rake task for that. That can be done by creating the file lib/tasks/export.rake with the following content.",
    result: "You can either expand this program so that the output is written directly into the db/seeds.rb or you can simply use the shell.",
    image_url: 'https://images.unsplash.com/photo-1557223146-2df1a50b57e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    trainer_id: 1
}])

services = Service.create([{
    service: 'Functional Training',
    service_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    trainer_id: 1
}, {
    service: 'Strength Training',
    service_description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    trainer_id: 1
}, {
    service: 'Posture Correction',
    service_description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    trainer_id: 1
}])

tools = Tool.create([{
    tool: 'Macronutrient Calculator',
    short_description: "How do you know how much carbohydrates, protein, or fats to consume in order to lose weight? Use this calculator to find out!",
    long_description: "What are macros? Each of the foods we eat are made up of 3 “macros”. These macros are carbohydrate (carbs), protein, and fat. Chicken is high in the protein macro but has no carbs. Rice is high in carbs, but very little fat or protein. This calculator tells you the best ratio of macros that you should eat to achieve your goals. From there, you need to determine the macros of all the foods you eat. By counting them each day, you can reach a target that leads to fat loss. Macro counting can free you from the “good food, bad food” mindset. You don’t need to make radical shifts in your diet, nor deprive yourself of your favorite foods. Just make sure you are within your macro counts for each day, and you’re good to go! For now, complete the following questions and find out more about your macro needs.",
    trainer_id: 1
}])

    # t.integer :age
    # t.string :sex
    # t.integer :current_weight
    # t.integer :current_height
    # t.string :activity_level
    # t.string :current_goal
    # t.text :results
    # t.timestamps