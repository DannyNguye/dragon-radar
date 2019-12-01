class Api::V1::CardsController < ApiController
  before_action :authenticate_user!, except: [:index]

  def index
    url = "http://shenronslair.com/api/cards"
    uri = URI(url)
    response = Net::HTTP.get(uri)
    cards = JSON.parse(response)

    render json: cards
  end
end
