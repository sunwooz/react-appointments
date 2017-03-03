var Blog = React.createClass({
	getInitialState: function() {
		return {
			posts: this.props.posts
		}
	},
	handleUserInput: function(obj) {
		this.setState(obj);
	},
	handleFormSubmit: function() {
		var post = { title: this.state.title, body: this.state.body };
		// $.post('/posts', {
		// 	post: post
		// }).done(function(data) {
		// 	this.addNewPost(data);
		// }.bind(this));

		var post_data = new FormData();
		post_data.append( "json", JSON.stringify( post ) );

		fetch('/posts', {
			method: 'POST',
			body: post_data
		}).then(function(data) {
			console.log(data);
			this.addNewPost(data);
		}.bind(this));
	},
	addNewPost: function(post) {
		var posts = React.addons.update(this.state.posts, { $push: [post] })
		console.log(posts);
		this.setState({
			posts: posts
		});
		console.log(posts);
	},
	render: function() {
		return (
			<div>
				<PostForm onFormSubmit={this.handleFormSubmit} onUserInput={this.handleUserInput} />
				<PostList posts={this.state.posts} />
			</div>
		);
	}
})