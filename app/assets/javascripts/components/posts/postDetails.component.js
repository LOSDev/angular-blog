angular.module('blog')
.component('postDetails', {
  templateUrl: "components/posts/postDetails.html",
  controller: ['$stateParams', 'Post', function ($stateParams, Post) {
    vm = this;
    Post.get($stateParams.postId)
    .then(function (resp) {
      vm.post = resp.data
    })
  }]
})
