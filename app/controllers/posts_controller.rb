class PostsController < ApplicationController

  def index
    @posts = Post.all.order("created_at DESC")
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = User.first.posts.build(post_params)
    if @post.save
      render 'show'
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end



  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
