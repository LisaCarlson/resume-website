$( document ).ready(function() {
   $(window).scroll(function(){
    if ($(".navbar").offset().top>50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
    else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

  });

   $('button.collapsed').on('shown.bs.collapse', function () {
     console.log('shown')
   })
});