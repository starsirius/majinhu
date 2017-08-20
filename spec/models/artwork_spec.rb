require 'rails_helper'

RSpec.describe Artwork, type: :model do
  it 'has a title attribute' do
    expect(subject.attributes).to include('title')
  end
end
