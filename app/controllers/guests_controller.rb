class GuestsController < ApplicationController
	def index
		@guest = Guest.new
	end
	def show
		
	end
	def create
		@guest = Guest.new(guest_params)
		if @guest.save
    		flash[:notice] = "Genial!"
			redirect_to ready_path
		else
	      flash[:alert] = "Ups!"
	      render :index
		end
	end

	# def subscriber_validator
	# 	if params[:email].size <= 2
	#   	  render json: { valid: false }
	# 	elsif Subscriber.find_by_email(params[:email].downcase)
	# 	  render json: { valid: false }
	# 	else
	# 	  render json: { valid: true }
	# 	end
	# end

	private

    def guest_params
      params.require(:guest).permit(:fullname, :dni, :fewdays, :startday, :endday, :classification, :car, 
				:kindcard, :idcar, :companions, :fav)
    end
end
