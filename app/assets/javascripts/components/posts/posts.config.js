angular.module('blog')
.config(function ($stateProvider) {
  $stateProvider
    .state('app.newPost', {
      url: "posts/new",
      template: "<new-post></new-post>"
    })
    .state('app.postDetails', {
      url: "posts/:postId",
      template: "<post-details></post-details>"
    })
    .state('app.editPost', {
      url: "posts/:postId/edit",
      template: "<edit-post></edit-post>"
    })

})
