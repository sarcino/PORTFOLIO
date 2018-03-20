window.onload = function () {
    
    // SMOOTH SCROLLING EFFECT
    // APPLY TO ALL LINKS
  $("a").on("click", function(event) {
    // THIS MUST HAVE HASH
    if (this.hash !== "") {
      event.preventDefault();      
      var hash = this.hash;
      // ANIMATION
      $("html,body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  
    
    
    

    // INSTAGRAM API

   // var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=30778564.c014a64.4b34293450c7470e9599b9a3a76e7271";

   // $.getJSON(url, function (json) {
    //    for (var i = 0; i < 20; i++) {
    //        $("#feed").append("<img src = '" + json.data[i].images.standard_resolution.url + "' " + "alt='" + json.data[i].caption.text + "'>");
   //     }
   // })



    // END OF ONLOAD FUNCTION
}
