angular.module('blog')
.component('commentList', {
  templateUrl: "components/comments/comment-list.html",
  bindings: {
    post: '='
  },
  controller: ['Comment', '$window', 'toastr', function (Comment, $window, toastr) {
    var vm = this;
    Comment.getAll(vm.post.id)
    .then(function (resp) {
      vm.comments = resp;
    })

    vm.delete = function (comment) {
      if ($window.confirm("Do you want to delete this comment?")) {
        Comment.delete(vm.post.id, comment)
        .then(function (resp) {
          toastr.info('The Comment has been deleted!');
        })
      }
    }
  }]
})
