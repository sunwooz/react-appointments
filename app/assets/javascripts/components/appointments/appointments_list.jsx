var AppointmentsList = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.appointments.map(function(appointment) {
					return <Appointment key={appointment.id} title={appointment.title} appt_time={appointment.appt_time} />;
				})}
			</div>
		)
	}
})