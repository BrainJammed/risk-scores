/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$( document ).ready(function() {

  $(".seeMore").click(function(){
        $(".row3").toggle();
        $(".row4").toggle();
        $(".row5").toggle();
    });







});








   







