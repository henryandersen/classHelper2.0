$(document).ready(function() {


  $("#submitButton").attr("disabled","true");

  // prroblemBox.change(function() {  if(urgencyBox.value != 0  )

  $("#boxId").on("change", function () {
        //check other box
        $("#submitButton").attr("disabled","false");
  })

});

alert("HIHIHIHI")
