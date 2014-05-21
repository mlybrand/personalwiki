window.onload = function() {
  var links = document.getElementsByTagName("a");
  for(var i in links) {
    var h = links[i].href;
    if (typeof h.replace === "function") { links[i].href = h.replace(/\.md$/, ""); }
  }
};
