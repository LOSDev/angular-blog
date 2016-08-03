angular.module('blog')
.component('postList', {
  templateUrl: "components/posts/post-list.html",
  controller: ['$state', 'Post', function ($state, Post) {
    vm = this;
    Post.getAll()
    .then(function (resp) {
      vm.posts = resp.data;
    })
  }]
})
