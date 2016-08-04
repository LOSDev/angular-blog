angular.module('blog')
.component('tagCloud', {
  templateUrl: "components/tags/tag-cloud.html",
  controller: ['Post', function (Post) {
    var vm = this;

    Post.tagCloud().then(function (resp) {
      var tags = resp.data;
      for (var i = 0; i < tags.length; i++) {
        tags[i].ranking = i;
      }
      vm.tags = shuffle(tags)
    })
  }]
})

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
