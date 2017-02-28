var GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

var PIGPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

var ImageSliderContainer = React.createClass({
	getInitialState: function() {
		return { current: 0 }
	},
	getNextImage: function() {
		var current = this.state.current;
    	var next = ++current % GUINEAPATHS.length;
    	this.setState({ current: next });
	},
	interval: null,
	componentDidMount: function() {
		this.interval = setInterval(this.getNextImage, 3000);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	handleClick: function(e) {
		this.setState({
			current: ++e.target.value
		})
	},
	render: function() {
		return (
			<div>
				<GuineaPig src={GUINEAPATHS[this.state.current]} />
				<RealPig src={PIGPATHS[this.state.current]} onClick={this.handleClick} />
			</div>
		);
	}
});