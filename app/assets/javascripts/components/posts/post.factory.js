angular.module('blog')
.factory('Post', ['$http', function ($http) {
  var o = {};
  var urlBase = "/posts"
  o.create = function (post) {
    return $http.post(urlBase + ".json", {post: post})
  },
  o.update = function (post) {
    return $http.put(urlBase + "/" + post.id + ".json", {post: post})
  },
  o.get = function (id) {
    return $http.get(urlBase + "/" + id + ".json")
  }
  o.getAll = function (id) {
    if (id) {
      return $http.get(urlBase + ".json" + "?tag=" + id )
    }else {
      return $http.get(urlBase + ".json")
    }
  }
  o.delete = function (post) {
    return $http.delete(urlBase + "/" + post.id + ".json")
  }
  return o;
}])
