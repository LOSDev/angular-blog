angular.module('blog')
.component('postList', {
  templateUrl: "components/posts/post-list.html",
  controller: ['$state', '$stateParams', 'Post', function ($state, $stateParams, Post) {
    vm = this;
    vm.page = $stateParams.page || 1;
    if ($stateParams.id) {
      vm.tag = $stateParams.id
    }



    vm.prevPage = function () {
      vm.page -= 1;
      vm.getPosts();
    }
    vm.nextPage = function () {
      vm.page += 1;
      vm.getPosts();
    }

    vm.getPosts = function () {

      Post.getAll(vm.page, $stateParams.id)
      .then(function (resp) {
        vm.posts = resp.data;
        if (resp.data.length < 15) {
          vm.lastPage = true;
        }
      })
    }

    vm.getPosts();
  }]
})
