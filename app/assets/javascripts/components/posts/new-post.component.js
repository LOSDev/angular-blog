angular.module('blog')
.component('newPost', {
  templateUrl: "components/posts/new-post.html",
  controller: ['$state', 'Post', function ($state, Post) {
    vm = this;
    vm.submit = function () {
      Post.create(vm.post)
      .then(function (resp) {
        $state.go('app.postDetails', {postId: resp.data.id})
      }, function (err) {
        vm.errors = err.data;
      })
    }
  }]
})
