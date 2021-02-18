class UsersController < ApplicationController
   	before_action :set_user, only: [:show, :edit, :update, :destroy]


	def create
	end


	def update
		@user.update(new_params)

		if @user.update(user_params)
			redirect_to @user, notice: "Perfecto!"
		else
			# render 'edit'
			flash[:alert] = "Ups. Algo no esta bien :("
		end

	end



	private

		def set_user
	    	@user = User.find(params[:id])
		end

		def user_params
			params.require(:user).permit(:fullname, :email, :dni, :fewdays, :startday, :endday, :classification, :car, 
				:kindcard, :enrollment, :password, :password_confirmation, :remember_me)
		end
end