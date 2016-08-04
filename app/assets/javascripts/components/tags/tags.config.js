angular.module('blog')
.config(function ($stateProvider) {
  $stateProvider
  .state('app.tag', {
    url: "tag/:id",
    template: "<post-list></post-list>"
  })
})
