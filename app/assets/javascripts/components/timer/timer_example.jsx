var TimerExample = React.createClass({
	propTypes: {
		elapsed: React.PropTypes.number.isRequired
	},
	render: function() {
		return (
			<p>
				This example was started {this.props.elapsed} seconds ago.
			</p>
		);
	}
})