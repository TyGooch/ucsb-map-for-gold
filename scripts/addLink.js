var acronyms = [
  "ANCAP HALL",
  "ARCH RANGE",
  "ARTS",
  "BSBL FIELD",
  "BIOL2",
  "BIOEN",
  "BRDA",
  "BREN",
  "BSIF",
  "BUCHN",
  "CAMPB HALL",
  "CHEM",
  "ELLSN",
  "EMBAR HALL",
  "ENGR1",
  "ENGR2",
  "ENGR3",
  "ESB",
  "EVENT CENTR",
  "GIRV",
  "HFH",
  "HSSB",
  "IV CENTR",
  "IV THEA",
  "KERR",
  "KOHN",
  "LIB",
  "LSB",
  "MANZ",
  "MLAB",
  "MUSIC",
  "MUSIC LLCH",
  "NOBLE",
  "NH",
  "PHELP",
  "PSB-N",
  "PSB-S",
  "PSYCH",
  "RECEN",
  "RECEN CTS",
  "RECEN MAIN",
  "RECEN PAVLN",
  "RECEN WT RM",
  "RGYM",
  "RGYM CTS",
  "RGYM FIELD",
  "RQET CTS",
  "SAASB",
  "SAND CTS",
  "SAN MIGEL",
  "SAN NIC",
  "SAN RAFEL",
  "SANTA CRUZ",
  "SANTA ROSA",
  "SB HARBR",
  "SFTBL FIELD",
  "SH",
  "STADM CTS",
  "STADM FIELD",
  "STORK FIELD",
  "STU HLTH",
  "SRB",
  "SWIM POOL",
  "TD-E",
  "TD-W",
  "TRACK FIELD",
  "WEBB",
  "WMNS CENTR"
];

function containsSubstring(string, substring){
  if(string.indexOf(substring) !== -1)
    return true;
  return false;
}

function isLocation(string){
  var result = false;
  // console.log(string.replace(/[0-9]/g, ''));
  acronyms.forEach(function(acronym) {
    // console.log(acronym.replace(/ /g, ''));
    if(string.replace(/[0-9]/g, '') === acronym.replace(/ /g, '')){
      console.log(string.replace(/[0-9]/g, ''));
      console.log(acronym.replace(/ /g, ''));
      result =  true;
    }
  })
  return result;
}

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
