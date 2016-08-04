angular.module('blog')
.factory('Comment', ['$http', function ($http) {
  var o = {};
  var comments = [];
  o.create = function (id, comment) {
    return $http.post("/posts/" + id + "/comments", {comment: comment})
    .then(function (resp) {
      comments.unshift(resp.data);
    })
  }
  o.getAll = function (page, id) {
    if (page === 1) {
      comments = [];
    }
    return $http.get('/posts/' + id + '/comments.json' + "?page=" + page)
    .then(function (resp) {
      comments = comments.concat(resp.data);
      return comments;
    })
  }

  o.delete = function (postId, comment) {
    return $http.delete("/posts/" + postId + "/comments/" + comment.id + ".json")
    .then(function (resp) {
      var index = comments.indexOf(comment);
      comments.splice(index, 1);
    })
  }
  return o;
}])
