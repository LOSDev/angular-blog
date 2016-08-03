angular.module('blog')
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('app', {
      abstract: true,
      url: "/",
      templateUrl: "components/app.html"
    })
    .state('app.home', {
      url: "",
      template: "<post-list></post-list>"
    })
    .state('app.about', {
      url: "about",
      templateUrl: "components/about.html",
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().catch(function (){
          $state.go('app.login');
        })
      }]
    })
})
