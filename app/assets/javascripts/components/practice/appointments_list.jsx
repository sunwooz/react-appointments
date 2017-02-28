var AppointmentsList = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.appointments.map(function(appointment) {
					return <Appointment title={appointment.title} appt_time={appointment.appt_time} />
				})}
			</div>
		)
	}
})