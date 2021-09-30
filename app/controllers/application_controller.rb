class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :current_cart, if: :current_user

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || products_path
  end

  private

  def current_cart
    if current_user&.cart.blank?
      current_user.build_cart.save!
    end
  end
end
