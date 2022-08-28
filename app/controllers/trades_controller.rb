class TradesController < ApplicationController
  # TODO: is this needed?
  skip_before_action :verify_authenticity_token

  def create
    trade = Trade.create(create_params)
    render json: trade
  end

  def all
    render json: Trade.all
  end

  private

  def trade_params
    params.require(:platform)
  end

  def create_params
    params.require(:trade).permit(:platform, :description)
  end

end
