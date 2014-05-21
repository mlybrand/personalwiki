window.onload = function() {
  var links = document.getElementsByTagName("a");
  foreach(var i in links) {
    var h = links[i].href;
    links[i].href = h.replace(/\.md$/, "");
  }
};
