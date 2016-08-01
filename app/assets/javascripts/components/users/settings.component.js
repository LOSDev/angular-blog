angular.module('blog')
.component('settings', {
  templateUrl: "components/users/settings.html",
  controller: ['Auth','$state', 'toastr', '$http', function (Auth, $state, toastr, $http) {
    vm = this;
    Auth.currentUser()
    .then(function (resp) {
      vm.user = resp
    }, function () {
      $state.go('app.home')
    })
    vm.update = function () {
      $http.put("users.json", {user: vm.user})
        .then(function (user) {
          vm.user = user;
          $state.go("app.home");
          toastr.success('Profile updated!');
        }, function (error) {
          vm.errors = error.data.errors
        })
    }
  }
  ]
})
