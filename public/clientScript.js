$(document).ready(function() {


  $("#submitButton").attr("disabled","true");



  $("#boxId").on("change", function () {

      //check other box
      if($("#urgency").val()!==0){
        alert("HIHIHIHI");
        $("#submitButton").attr("disabled","false");
      }

  })
  $("#sortSelect").on("change", function () {
      if(this.value == 0){
        window.location = '/tProfile'
      }
      if(this.value ==1){
        window.location = '/tProfile5'

      }
    })
  $("#1").on("click", function() {
    swal({
      title: "You are having issues with you Mouse/Keyboard",
      text: "Here's the general solution: Make sure everything is plugged in correctly.",
      button: "OK",
    });
  })
  $("#2").on("click", function() {
    swal({
      title: "You're computer is logged into the wrong account",
      text: "Here's what you do: In the top left corner of your screen, click the Apple logo button and select 'log out'. Then sign into the correct period",
      button: "OK",
    });
  })
  $("#3").on("click", function() {
    swal({
      title: "You are having trouble finding a file or project",
      text: "Here's what you do: Open up Finder (the application with the blue face) and type the name of the file/project in the search bar.",
      button: "OK",
    });
  })

  $(".answerButton").on("click", function () {
    console.log(this.value);
    if(this.value == 'Mouse/keyboard issue'){
      swal({
        title: "You are having issues with you Mouse/Keyboard",
        text: "Here's the general solution: Make sure everything is plugged in correctly.",
        button: "OK",
      });
    }
    if(this.value == 'My computer is stuck logged into another class account'){
      swal({
        title: "You're computer is logged into the wrong account",
        text: "Here's what you do: In the top left corner of your screen, click the Apple logo button and select 'log out'. Then sign into the correct period",
        button: "OK",
      });
    }
    if(this.value == 'I can’t find a file/project on my computer'){
      swal({
        title: "You are having trouble finding a file or project",
        text: "Here's what you do: Open up Finder (the application with the blue face) and type the name of the file/project in the search bar.",
        button: "OK",
      });
    }
    if(this.value == 'I want to talk about my grade in class'){
      swal({
        title: "You want to talk about you grade in this class?",
        text: "Here's what you do: Open up berkeley.illuminate in a new tab and have your grades ready for Mr. Rowland. Continue your work until he is ready to talk with you.",
        button: "OK",
      });
    }
    if(this.value == 'I want Mr. Rowland’s opinion on something'){
      swal({
        title: "You want Mr. Rowlands opinion",
        text: "Mr. Rowland has great opinions, but maybe ask your classmates what they think first. If they can't help you, hold tight for Mr. Rowland.",
        button: "OK",
      });
    }
    if(this.value == 'I want a check-in with Mr. Rowland (review of what I should be doing)'){
      swal({
        title: "You want a check-in with Mr. Rowland (a review of what you should be doing)",
        text: "First ask your classmates if they know what you should be doing. If they can't help you, hold tight for Mr. Rowland.",
        button: "OK",
      });
    }
    if(this.value == 'Other'){
      swal({
        title: "You selected 'Other'",
        text: "Make sure you explain clearly what you need in the comments, and be ready to explain your problem to Mr. Rowland.",
        button: "OK",
      });
    }

  })
dadasdd

});
function getval(sel){

    if($("#urgency").val()!=="0" && $("#need").val()!=="0"){
      $("#submitButton").prop("disabled",false);
    }else{
      $("#submitButton").prop("disabled","true");
    }

}
function getval2(sel){

    if($("#need").val()!=="0" && $("#urgency").val()!=="0"){
      $("#submitButton").prop("disabled",false);
    }else{
      $("#submitButton").prop("disabled","true");
    }

}
