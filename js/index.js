function toggle() {
  $(".proceedArrow").fadeToggle(3000, "swing", function(){
    toggle();
  });
}

$(document).ready(function(){ 
  toggle();
});