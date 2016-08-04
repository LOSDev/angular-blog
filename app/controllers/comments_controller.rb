class CommentsController < ApplicationController

  before_action :authenticate_user!, except: [:index, :create]

  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments.order("created_at DESC").page(params[:page]).per(10)
    render json: @comments
  end

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.build(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    @comment.destroy
    head :no_content
  end


  private

  def comment_params
    params.require(:comment).permit(:name, :body)
  end
end
