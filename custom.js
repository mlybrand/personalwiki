var links = document.getElementsByTagName("a");
console.log(links);
for(var i in links) {
  console.log(links[i]);
  //var h = links[i].href;
  //links[i].href = h.replace(/\.md$/, "");
  //console.log(h);
}

