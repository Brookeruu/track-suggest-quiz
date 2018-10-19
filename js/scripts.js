// var resultInterest = interest(function) {
//   if (interest === option1) {
//     return true;
//   }
// }


//
// var resultInterest = $("select#interest").val();
// var longHours
// var layoutDesign
// var bigBusiness
// var describeYou




$(document).ready(function() {
  $("form#whichTrack").submit(function(event) {
    event.preventDefault();
    var resultInterest = $("select#interest").val();
    console.log(resultInterest);

    if(resultInterest === false) {
      $("#resultNone").show();
    }



  });
});
