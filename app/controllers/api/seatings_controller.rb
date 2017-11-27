class Api::SeatingsController < ApplicationController
  def create
    @seating = Seating.new(seating_params)

    if @seating.save
      render 'api/seatings/show'
    else
      render json: @seating.errors.full_messages, status: 409
    end
  end

  def show
    @seating = Seating.find(params[:id])
    render 'api/seatings/show'
  end

  def update
    @seating = Seating.find(params[:id])

    if @seating.update(seating_params)
      render 'api/seatings/show'
    else
      render json: @seating.errors.full_messages, status: 422
    end
  end

  private
  def seating_params
    params.permit(:restaurant_id, :seats, :max_tables)
  end
end
