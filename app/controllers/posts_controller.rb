class PostsController < ApplicationController

  before_action :authenticate_user!, except: [:index, :show]


  def index
    if params[:tag]
      @posts = Post.tagged_with(params[:tag]).order("created_at DESC")
    else
      @posts = Post.all.order("created_at DESC")
    end
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

  def update
    @post = User.first.posts.find(params[:id])
    if @post.update(post_params)
      render 'show'
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @post = User.first.posts.find(params[:id])
    @post.destroy
    head :no_content
  end



  private

  def post_params
    params.require(:post).permit(:title, :body, :tag_list)
  end
end
