angular.module('blog')
.config(function ($stateProvider) {
  $stateProvider
    .state('app.register', {
      url: "register",
      template: "<register></register>",
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
         $state.go('app.home');
        })
      }]
    })
    .state('app.login', {
      url: "login",
      template: "<login></login>",
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
         $state.go('app.home');
        })
      }]
    })
})
