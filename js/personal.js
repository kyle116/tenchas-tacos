window.onload = function () {
  var arr = ["Tacos", "Drinks", "Sides"];
  var desc = ["MEATS (CHOICE OF 3)", "AGUA FRESCAS ($25 EACH)", "Sides"];
  $('#team-carousel > div.owl-wrapper-outer > div').children().each(function(idx, elem) {
  	if(idx === 0 || idx % 3 === 0) {
      var titles = document.createElement("h2");
      var descriptions = document.createElement("h4");
      titles.innerText = arr[idx / 3];
      descriptions.innerText = desc[idx / 3];
  	  elem.before(titles)
    }
  })
}
