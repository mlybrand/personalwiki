window.onload = function() {
  var links = document.getElementsByTagName("a");
  for(var i in links) {
    var h = links[i].href;
    h.replace && links[i].href = h.replace(/\.md$/, "");
  }
};
