var TimerExampleContainer = React.createClass({
	getInitialState: function() {
		return {
			elapsed: 0
		}
	},
	componentDidMount: function() {
		this.startTimer();
	},
	componentWillUnmount: function() {
		clearInterval(this.startTimer)
	},
	startTimer: function() {
		console.log('started');
		setInterval(this.tick, 1000);
	},
	tick: function() {
		console.log('tick');
		this.setState({
			elapsed: this.state.elapsed + 1
		})
	},
	render: function() {
		return <TimerExample elapsed={this.state.elapsed} />
	}
})