#Create Product

brand = Brand.create!(name: "Nike")

product = brand.products.create!(name: "Shirt")

#Creating option typs for product and then inserting values for each option type

product.option_types.create!(name: "Size").tap do |size|
  %W(Small Medium Large).each do |name|
    size.option_values.create!(name: name)
  end
end

product.option_types.create!(name: "Color").tap do |color|
  %W(Red Blue Orange).each do |name|
    color.option_values.create!(name: name)
  end
end

product.option_types.create!(name: "Material").tap do |material|
  %W(Cotton Poly).each do |name|
    material.option_values.create!(name: name)
  end
end

#first, let's get some option values to use for our new variant

small =
  product.option_types
    .find_by(name: "Size").option_values
    .find_by(name: "Small")

red =
  product.option_types
    .find_by(name: "Color").option_values
    .find_by(name: "Red")

cotton =
  product.option_types
    .find_by(name: "Material").option_values
    .find_by(name: "Cotton")

# then we'll create the variant for these values
product.variants.create!(
  option_values: [small, red, cotton], price_cents: 12.95)

# Creating Sugar product and variants

brand = Brand.create!(name: "Cann")
product = brand.products.create!(name: "Sugar")

#Creating option typs for product and then inserting values for each option type

product.option_types.create!(name: "Size").tap do |size|
  %W(1KG 2KG 5KG 10KG).each do |name|
    size.option_values.create!(name: name)
  end
end

#first, let's get some option values to use for our new variant

one_kg = product.option_types.find_by(name: "Size").option_values.find_by(name: "1KG")

two_kg = product.option_types.find_by(name: "Size").option_values.find_by(name: "2KG")

five_kg = product.option_types.find_by(name: "Size").option_values.find_by(name: "5KG")

ten_kg = product.option_types.find_by(name: "Size").option_values.find_by(name: "10KG")

# then we'll create the variant for these values
product.variants.create!(option_values: [one_kg], price_cents: 40.00)

product.variants.create!(option_values: [two_kg], price_cents: 78.00)

product.variants.create!(option_values: [five_kg], price_cents: 150.00)

product.variants.create!(option_values: [ten_kg], price_cents: 380.00)