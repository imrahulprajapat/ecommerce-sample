class ProductsController < ApplicationController
  def index
    @products = Product.eager_load(:variants) #avoids n+1 query
  end
end
