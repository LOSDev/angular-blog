angular.module('blog')
.component('tagInput', {
  templateUrl: "components/tags/tag-input.html",
  bindings: {
    onAdd: "&",
    onRemove: "&",
    tagList: "="
  },
  controller: function () {
    var vm = this;
    vm.add = function (ev) {
      if (ev.keyCode === 13) {
        vm.onAdd({ev: ev, tag: vm.tagField});
        vm.tagField = "";
      }
    }

    vm.remove = function (tag) {
      vm.onRemove({tag: tag})
    }
  }
})
