class OrdersController < ApplicationController
  before_action :authenticate_user!
  before_action :fetch_order, only: [:show, :delivered, :process_order]

  def index
    @orders = current_user.orders
  end

  def show;end

  def new
    @order = Order.new
  end

  def create
    order = current_user.orders.new(order_params)
    current_user.cart.line_items.each do |item|
      order.line_items << item
      item.cart_id = nil
    end
    order.save
    current_user.cart.destroy
    redirect_to root_path
  end

  def delivered
    @order.success!
    redirect_to root_path
  end

  #if payment done then process order  
  def process_order
    @order.process!
    redirect_to root_path
  end

  private
  
  def order_params
    params.require(:order).permit(:address)
  end

  def fetch_order
    @order = current_user.orders.find(params[:id])
  end

end
