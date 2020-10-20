//Creating the modal popup//
// variables// Divs to be used in the modal
        var button = document.getElementById("opener");
        var modal = document.getElementById("modal");
        var modals =document.getElementById("bg-modal");
        var sign = document.getElementById("sign");
    //   Functions//
    // when the user clicks on the sign in button in the menu
    button.onclick = function(){
    modal.style.display= "block";
    modals.style.display ="block";
  }
//   when the user clicks on the "sign up now button";//
    sign.onclick = function(){
    modal.style.display = "block";
    modals.style.display = "block";
  }
//  Programming the close button 
  var closer = document.getElementById("closer");
    closer.onclick = function(){
    modal.style.display ="none";
    modals.style.display ="none"; 
  }
//   End of popup
                        

