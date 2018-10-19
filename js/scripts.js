

$(document).ready(function() {
  $("form#whichTrack").submit(function(event) {
    event.preventDefault();

    var resultInterest = $("#interest").val();

    if(resultInterest === "Yes") {
      $("#resultNone").hide();
    } else {
      $("#resultNone").show();
      
    }

  });



});
