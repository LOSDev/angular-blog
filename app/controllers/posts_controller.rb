class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = User.first.posts.build(post_params)
    if @post.save
      render 'show'
    else
      render json: @post.errors
    end
  end



  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
