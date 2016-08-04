angular.module('blog')
.component('newComment', {
  templateUrl: "components/comments/new-comment.html",
  controller: ['Comment', '$stateParams', 'toastr', function (Comment, $stateParams, toastr) {
    var vm = this;
    vm.submit = function () {
      Comment.create($stateParams.postId, vm.comment).then(function (resp) {
        vm.comment = {};
        toastr.info('comment saved!')
      })
    }
  }]
})
