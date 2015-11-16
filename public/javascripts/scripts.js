$( document ).ready(function() {
  $('.flower1,.flower2').hide();
   $(window).scroll(function() {
    console.log($(".navbar").offset().top)
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    }
    else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    if ($(".navbar").offset().top > 765) {
      $('.flower1, .flower2').fadeIn(2000);
      setTimeout(function(){
        $('.flower1, .flower2').css({'transform':'scale(1.5)', 'transition': 'cubic-bezier(.17,.67,.83,.67)', 'transition-duration':'2s'});
      }, 1000); 
    }
  });

  function scrollToAnchor(id){
      var $el = $(id);
      $('html,body').animate({scrollTop: $el.offset().top},2000);
  }
  $("li.page-scroll a").click(function(e) {
      e.preventDefault();
     scrollToAnchor($(e.target).attr('href'));
  });
  $("#see-work").click(function() {
      scrollToAnchor('#portfolio');
  });
  $("a.navbar-brand").click(function(){
    scrollToAnchor('#page-top');
  })
});

