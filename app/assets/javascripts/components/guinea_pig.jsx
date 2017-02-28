var GuineaPig = React.createClass({
	render: function() {
		var src = this.props.src;
		return (
			<img src={src} />
		)
	}
})