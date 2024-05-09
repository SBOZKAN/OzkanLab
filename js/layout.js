$(document).ready(function() {
  if (document.location.href.indexOf("index") < 0 ) {
    $( "#loaded-layout" ).load( "../boiler.html #layout");
  }
});
