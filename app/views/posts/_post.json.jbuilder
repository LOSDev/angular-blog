json.extract! post, :id, :title, :body, :created_at
json.user post.user
json.tag_list post.tag_list
