var PostForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		this.props.onFormSubmit();
	},
	handleChange: function(e) {
		var name = e.target.name;
		var obj = {};
		obj[name] = e.target.value;
		this.props.onUserInput(obj);
	},
	render: function() {
		return ( 
			<div>
				<form onSubmit={this.handleSubmit} role='form' acceptCharset="UTF-8" action='/posts' method='post'>
					<input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
					<input onChange={this.handleChange} name="title" type="text" />
					<input onChange={this.handleChange} name="body" type="text" />
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
})