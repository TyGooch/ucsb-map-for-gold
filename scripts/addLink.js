var mapLinks = document.querySelectorAll("a[href^='http://map.ucsb.edu']");
for (var i = 0, l = mapLinks.length; i < l; i++) {
  mapLink = mapLinks[i];
  mapLink.href = `https://ucsbmap.com/${mapLink.textContent.split(',')[0].replace(/ /g, '')}`;
}