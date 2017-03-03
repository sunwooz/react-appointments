class PostsController < ApplicationController
	skip_before_action :verify_authenticity_token
	before_filter :parse_post, only: :create

	def index
		@posts = Post.all
	end

	def create
		@post = Post.new(post_params)
		if @post.save
			render json: @post
		else
			render json: @post.errors
		end
	end

	private

	def post_params
		params.require(:post).permit(:title, :body)
	end

	def parse_post
		params["post"] = JSON.parse(params[:json])
	end
end
