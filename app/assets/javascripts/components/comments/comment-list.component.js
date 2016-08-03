angular.module('blog')
.component('commentList', {
  templateUrl: "components/comments/comment-list.html",
  controller: ['$stateParams', 'Comment', '$window', function ($stateParams, Comment, $window) {
    var vm = this;
    Comment.getAll($stateParams.postId)
    .then(function (resp) {
      vm.comments = resp;
    })

    vm.delete = function (comment) {
      if ($window.confirm("Do you want to delete this comment?")) {
        Comment.delete($stateParams.postId, comment)
      }
    }
  }]
})
