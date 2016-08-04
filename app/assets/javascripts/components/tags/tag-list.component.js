angular.module('blog')
.component('tagList', {
  templateUrl: "components/tags/tag-list.html",
  bindings: {
    tagList: "<"
  }
})
