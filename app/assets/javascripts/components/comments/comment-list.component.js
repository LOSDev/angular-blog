angular.module('blog')
.component('commentList', {
  templateUrl: "components/comments/comment-list.html",
  bindings: {
    post: '<'
  },
  controller: ['Comment', '$window', 'toastr', function (Comment, $window, toastr) {
    var vm = this;
    vm.page = 1
    vm.comments= [];
    vm.delete = function (comment) {
      if ($window.confirm("Do you want to delete this comment?")) {
        Comment.delete(vm.post.id, comment)
        .then(function (resp) {
          toastr.info('The Comment has been deleted!');
        })
      }
    }

    vm.getComments = function () {
      
      Comment.getAll(vm.page, vm.post.id)
      .then(function (resp) {
        var beforeSize = vm.comments.length;
        vm.comments = resp;
        var afterSize = vm.comments.length;

        if (afterSize - beforeSize < 10) {
          vm.lastPage = true;
        }
      })
    }

    vm.nextPage = function () {
      vm.page += 1;
      vm.getComments();
    }

    vm.getComments();
  }]
})
