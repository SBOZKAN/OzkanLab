$(document).ready(function() {
  if (document.location.href.indexOf("boiler") < 0 ) {
    $( "#loaded-layout" ).load( "../boiler.html #layout");
  }
});
