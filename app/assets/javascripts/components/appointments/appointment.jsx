var Appointment = React.createClass({

	render: function() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.appt_time}</p>
			</div>
		)
	}

})