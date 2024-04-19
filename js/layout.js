$(document).ready(function() {
  if (document.location.href.indexOf("index") < 0 ) {
    $( "#loaded-layout" ).load( "../index.html #layout");
  }
});
