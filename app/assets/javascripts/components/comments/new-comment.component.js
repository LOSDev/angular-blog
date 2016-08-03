angular.module('blog')
.component('newComment', {
  templateUrl: "components/comments/new-comment.html",
  controller: ['Comment', '$stateParams', function (Comment, $stateParams) {
    var vm = this;
    vm.submit = function () {
      Comment.create($stateParams.postId, vm.comment);
    }
  }]
})
