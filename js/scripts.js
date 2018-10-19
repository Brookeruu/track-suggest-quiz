

$(document).ready(function() {
  $("form#whichTrack").submit(function(event) {
    event.preventDefault();

    var resultInterest = $("#interest").val();
    var resultLongHours = $("#longHours").val();

    if(resultInterest === "Yes") {
      $("#resultNone").hide();
    } else {
      $("#resultNone").show();
      $("#threeQuestions").hide();
    }

    if(resultLongHours === "1") {
      $("#resultNone").hide();
    } else {
      $("#resultNone").show();
      $("#threeQuestions").hide();
    }

  });
});
