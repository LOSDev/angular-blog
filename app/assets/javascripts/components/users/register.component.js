angular.module('blog')
.component('register', {
  templateUrl: "components/users/register.html",
  controller: ['Auth','$state', 'toastr', function (Auth, $state, toastr) {
    vm = this;
    vm.register = function () {
      Auth.register(vm.user)
        .then(function (user) {
          $state.go("app.home");
          toastr.success('Registration successful!', 'Congratulations');
        }, function (error) {
          vm.errors = error.data.errors
        })
    }
  }
  ]
})
