class Api::V1::CardsController < ApiController
  before_action :authenticate_user!, except: [:index]
  def index

  end

end
