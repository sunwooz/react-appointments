var RealPig = React.createClass({
	render: function() {
		var src = this.props.src;
		return <img src={src} onClick={this.props.handleClick} />
	}
})