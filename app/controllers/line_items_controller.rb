class LineItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :fetch_cart

  def create
    # Find associated product and current cart
    chosen_product = Variant.find(params[:variant_id])
    current_cart = @cart

    # If cart already has this product then find the relevant line_item and iterate quantity otherwise create a new line_item for this product
    if current_cart.products.include?(chosen_product)
      # Find the line_item with the chosen_product
      @line_item = current_cart.line_items.find_by(:variant_id => chosen_product)
      # Iterate the line_item's quantity by one
      @line_item.quantity += 1
    else
      @line_item = LineItem.new
      @line_item.cart = current_cart
      @line_item.product = chosen_product
    end

    # Save and redirect to cart show path
    @line_item.save
    redirect_to cart_path(current_cart)
  end

  def destroy
    @line_item = LineItem.find(params[:id])
    @line_item.destroy
    redirect_to cart_path(@cart)
  end  

  def add_quantity
    @line_item = LineItem.find(params[:id])
    @line_item.quantity += 1
    @line_item.save
    redirect_to cart_path(@cart)
  end

  def reduce_quantity
    @line_item = LineItem.find(params[:id])
    if @line_item.quantity > 1
      @line_item.quantity -= 1
    end
    @line_item.save
    redirect_to cart_path(@cart)
  end

  private

  def line_item_params
    params.require(:line_item).permit(:quantity, :variant_id, :cart_id)
  end

  def fetch_cart
    @cart = current_user.cart
  end
end
