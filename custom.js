var links = document.getElementsByTagName("a");
for(var i in links) {
  var h = links[i].href;
  links[i].href = h.replace(/\.md$/, "");
}

