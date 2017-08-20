require 'rails_helper'

RSpec.describe ArtworksController, type: :controller do
  describe 'GET #index' do
    before do
      get :index
    end

    it 'renders the index template' do
      expect(response.status).to be 200
      expect(response).to render_template :index
    end
  end
end
