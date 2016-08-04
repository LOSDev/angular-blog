# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Post.delete_all
100.times {Post.create(title: Faker::Book.title,
          body: Faker::Hipster.paragraphs(5).join('\n\n'),
          user_id: 1,
          tag_list: [Faker::Hipster.word, Faker::Hipster.word, Faker::Hipster.word])}
