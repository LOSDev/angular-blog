angular.module('blog')
.factory('Post', ['$http', function ($http) {
  var o = {};
  var urlBase = "/posts"
  o.create = function (post) {
    return $http.post(urlBase + ".json", {post: post})
  },
  o.get = function (id) {
    return $http.get(urlBase + "/" + id + ".json")
  }

  return o;
}])
