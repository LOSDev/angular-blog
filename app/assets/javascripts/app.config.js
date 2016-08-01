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
      templateUrl: "components/home.html"
    })
    .state('app.about', {
      url: "about",
      templateUrl: "components/about.html"
    })
})
