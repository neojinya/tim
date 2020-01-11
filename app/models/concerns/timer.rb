class Timer
  include ActiveModel::Model
  attr_accessor :wage
  validates :wage, presence: true
end