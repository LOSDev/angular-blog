# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Post.delete_all
Comment.delete_all
30.times do
  Post.create(title: Faker::Book.title,
            body: Faker::Hipster.paragraphs(5).join('\n\n'),
            user_id: 1,
            image: Faker::Avatar.image,
            tag_list: [Faker::Hipster.word, Faker::Hipster.word, Faker::Hipster.word])
  12.times {Comment.create(name: Faker::Name.name, body: Faker::Hipster.paragraph, post_id: Post.last.id)}
end
