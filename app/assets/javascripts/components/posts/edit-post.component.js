angular.module('blog')
.component('editPost', {
  templateUrl: "components/posts/edit-post.html",
  controller: ['$state', 'Post', '$stateParams', function ($state, Post, $stateParams) {
    var vm = this;
    Post.get($stateParams.postId)
    .then(function (resp) {
      vm.post = resp.data;
    })
    vm.submit = function () {
      Post.update(vm.post)
      .then(function (resp) {
        $state.go('app.postDetails', {postId: resp.data.id})
      })
    }
  }
  ]
})
