
console.log("Your index.js file is loaded correctly!");
$(document).ready(function(){
    $("li").hover(function(){
      $(this).css("background-color", "#F2A89A");
      }, function(){
      $(this).css("background-color", "white");
    });
  });