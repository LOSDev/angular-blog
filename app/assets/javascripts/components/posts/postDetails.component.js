angular.module('blog')
.component('postDetails', {
  templateUrl: "components/posts/postDetails.html",
  controller: ['$stateParams', 'Post', '$state', '$window', 'toastr', function ($stateParams, Post, $state, $window, toastr) {
    vm = this;
    Post.get($stateParams.postId)
    .then(function (resp) {
      vm.post = resp.data;
    })

    vm.delete = function () {
      if ($window.confirm("Do you want to delete this Article?")) {
        Post.delete(vm.post)
        .then(function (resp) {
          $state.go('app.home');
          toastr.info('The Article has been deleted!');
        })
      }
    }
  }]
})
