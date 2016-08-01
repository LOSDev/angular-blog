angular.module('blog')
.component('blogNavbar', {
  templateUrl: "components/blog-navbar.html",
  controller: ['$state', 'Auth', 'toastr', '$scope', '$rootScope', function ($state, Auth, toastr, $scope, $rootScope) {
    vm = this;

    Auth.currentUser()
    .then(function (resp) {
      $rootScope.user = resp
    }, function (err) {
      
    })

    vm.logout = function () {
      Auth.logout()
    }
    $scope.$on('devise:new-registration', function (e, user){
    });

    $scope.$on('devise:login', function (e, user){
      $rootScope.user = user;
    });

    $scope.$on('devise:logout', function (e, user){
      $rootScope.user = {};
      $state.go('app.home')
    });


  }]
})
