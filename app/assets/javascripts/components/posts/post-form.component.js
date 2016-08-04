angular.module('blog')
.component('postForm', {
  templateUrl: "components/posts/post-form.html",
  controller: ['$state','$stateParams', 'Post', 'toastr', function ($state, $stateParams, Post, toastr) {
    vm = this;
    if ($stateParams.postId) {
      Post.get($stateParams.postId).then(function (resp) {
        vm.post = resp.data;
        vm.tagList = resp.data.tag_list;
      })
    }else {
      vm.post = {};
      vm.tagList = [];
    }
    vm.submit = function () {
      vm.post.tag_list = angular.copy(vm.tagList).join(', ');
      if (vm.post.id) {
        Post.update(vm.post)
        .then(function (resp) {
          $state.go('app.postDetails', {postId: resp.data.id});
          toastr.info('Successfully updated!')
        }, function (err) {
          vm.errors = err.data;
        })
      }else {
        Post.create(vm.post)
        .then(function (resp) {
          $state.go('app.postDetails', {postId: resp.data.id});
          toastr.info('Post created!')
        }, function (err) {
          vm.errors = err.data;
        })
      }

    }

    vm.addTag = function (tag) {
      vm.tagList.push(tag);
    }
    vm.removeTag = function (tag) {
      index = vm.tagList.indexOf(tag)
      if (index > -1) {
        vm.tagList.splice(index, 1)
      }

    }
  }]
})
