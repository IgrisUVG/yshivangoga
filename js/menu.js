$(document).ready(function(){
  $(function () { 
    $('.nav li').click(function () {
			$('*').removeClass('verbergend');
			$(this).toggleClass("active");
			$(this).siblings(".nav li").removeClass("active");
      $('body,html').animate({
				scrollTop: 0
      }, 800);
			window.location=$(this).find("a").attr("href").attr("target");
      return false;
    });
  });
  $('.navR a').click(function() {
    $('*').removeClass('verbergend');
		$(this).addClass('verbergend');
    /*$('body,html').animate({
      scrollTop: 0
    }, 800);*/
  }) 
});