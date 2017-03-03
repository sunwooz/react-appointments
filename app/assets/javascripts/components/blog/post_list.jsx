var PostList = React.createClass({
	render: function() {

		return (
			<div>
				{this.props.posts.map(function(post) {
					return (
						<Post key={post.id} post={post} />
					);
				})}
			</div>
		);
	}
})