class AppointmentsController < ApplicationController

	def index
		@appointments = Appointment.order('appt_time ASC')
	end

	def create
		@appointment = Appointment.new(appointment_params)

		if @appointment.save
			render json: @appointment
		else
			render json: @appointment.errors, status: :unproccessable_entity
		end
	end

	private

	def appointment_params
		params.require(:appointment).permit(:title, :appt_time)
	end

end
