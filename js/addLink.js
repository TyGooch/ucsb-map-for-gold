var tableEls = document.querySelectorAll(".scheduleblock");

tableEls.forEach(function(tableEl, idx, tableEls){
  var scheduleText = tableEl.innerText.split('\n');
  var linkText = scheduleText[1].replace(' ', '/').replace('-', '')

  tableEl.insertAdjacentHTML(
    'afterend',
    `<a href="https://ucsbmap.com/${linkText}" class="map-link">
       <img src="https://preview.ibb.co/dSeKTH/ucsb_map_logo.png" class="map-link-image"/>
     </a>`
  )
});
