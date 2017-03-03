var AppointmentForm = React.createClass({
	handleChange: function(e) {
		var name = e.target.name;
		obj = {};
		obj[name] = e.target.value;
		// console.log(this.props.input_title);
		this.props.onUserInput(obj);
	},
	handleSubmit: function(e) {
		e.preventDefault();
		this.props.onFormSubmit();
	},
	render: function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name='title' 
					placeholder='Appointment Title' 
					onChange={this.handleChange} />
				<input name='appt_time' 
					placeholder='Date and Time' 
					onChange={this.handleChange} />
				<input type="submit" value="Make Appointment" />
			</form>
		)
	}
})