var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Post = React.createClass({
	render: function() {
		return (
			<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
				<div>
					<h1>{this.props.post.title}</h1>
					<p>{this.props.post.body}</p>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
})
