# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# User.destroy_all
# Product.destroy_all
# Order.destroy_all
# OrderedItem.destroy_all

Product.create!(name: 'Cafe Americano', price: 200, description: 'great pick me up!', category: 'drink', inventory: rand(10))
Product.create!(name: 'Red Bull', price: 300, description: 'get energized!', category: 'drink', inventory: rand(10))
Product.create!(name: 'Doritos Nacho', price: 100, description: 'hungry?', category: 'food', inventory: rand(10))
Product.create!(name: 'Cup Ramen', price: 150, description: 'it\'s more than just soup!', category: 'food', inventory: rand(10))
Product.create!(name: 'Mints', price: 400, description: 'Good for pair programming', category: 'food', inventory: rand(10))

# User.create!(email: "randomemail@email.com", stripe_token: "1")

Order.create!(user_id: 1, status: "ordered")

Admin.create!(username: 'admin', password: 'password1234')
