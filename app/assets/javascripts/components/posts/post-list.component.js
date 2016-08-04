angular.module('blog')
.component('postList', {
  templateUrl: "components/posts/post-list.html",
  controller: ['$state', '$stateParams', 'Post', function ($state, $stateParams, Post) {
    vm = this;
    if ($stateParams.id) {
      vm.tag = $stateParams.id
    }
    Post.getAll($stateParams.id)
    .then(function (resp) {
      vm.posts = resp.data;
    })
  }]
})
