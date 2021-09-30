class Order < ApplicationRecord
  STATES           = %i[prepared processing rejected succeed failed].freeze

  include AASM

  has_many :line_items, dependent: :destroy
  belongs_to :user

  scope :completed -> { where(aasm_state: 'succeed') }

  aasm whiny_transitions: false do
    state :prepared, initial: true
    state :submitted
    state :rejected
    state :succeed
    state :processing

    event :process do
      transitions from: %i[prepared], to: :processing #if payment done then state will be processing
    end

    event :reject do
      transitions from: %i[prepared failed], to: :rejected
    end

    event :success do
      transitions from: :processing, to: :succeed
    end

    event :fail do
      transitions from: :processing, to: :failed
      after %i[process_refund notify_user]        # in case you are unable to deliver product
    end
  end
end
