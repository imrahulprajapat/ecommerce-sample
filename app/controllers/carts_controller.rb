class CartsController < ApplicationController
  before_action :authenticate_user!
  before_action :cart

  def show;end

  def destroy
    cart.destroy
    redirect_to root_path
  end

  private

  def cart
    @cart = current_user.cart
  end
end 
