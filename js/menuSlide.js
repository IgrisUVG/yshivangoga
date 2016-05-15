$(document).ready(function(){
  $(function () { 
		$(".nav li:first").addClass("active");
		//$(".nav li:first").hide();
    $('.nav li').click(function () {
			$('*').removeClass('verbergend');//Добавлено
			$(this).slideUp("slow")
			.siblings(".nav li:hidden").slideToggle("slow");
			$(this).toggleClass("active");
			$(this).siblings(".nav li").removeClass("active");
      $('body,html').animate({
				scrollTop: 0
      }, 800);
			window.location=$(this).find("a").attr("href").attr("target");
      return false;
    });
  }); 
});

$(document).ready(function() {
  $('.navR a').click(function() {
		//$('.menu ul').slideUp(400);
    $('*').removeClass('verbergend');
		$(this).addClass('verbergend');
    $('body,html').animate({
      scrollTop: 0
    }, 800);
  })
});