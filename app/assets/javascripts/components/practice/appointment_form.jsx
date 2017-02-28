var AppointmentForm = React.createClass({
	render: function() {
		return (
			<form>
				<input name='title' placeholder='Appointment Title' />
				<input name='appt_time' placeholder='Date and Time' />
				<input type="submit" value="Make Appointment" />
			</form>
		)
	}
})