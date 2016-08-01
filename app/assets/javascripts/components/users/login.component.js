angular.module('blog')
.component('login', {
  templateUrl: "components/users/login.html",
  controller: ['Auth','$state', 'toastr', function (Auth, $state, toastr) {
    vm = this;
    vm.login = function () {
      Auth.login(vm.user)
        .then(function (user) {
          $state.go("app.home");
          toastr.success('You are now logged in.');
        }, function (error) {
          toastr.error(error.data.error);
        })
    }
  }]
})
