# README

## Setup Guide

* Clone the repositery

* go to project directory

* rvm use ruby-3.0.0

* bundle install

* configure db we are postgresql

* rake db:setup

## Project Overview


* Brand(name) => Brand has many products

* Cart => has many line_items, has many variants through line items

* OptionType(name, product_id) => has many option_values, belongs to product

* OptionValue() => has many option_value_variants

* User(email, password) => User has many order, has one cart, has one wishlist

* Variant => Belongs to product, has many option values, has many option value variants, has many line items

* wishlist => belongs to user and has and belongs to many variants

## Gem Used

* devise gem for user authentication

* aasm_state for managing order state

## Others

* Added routes

* controller level code is done.