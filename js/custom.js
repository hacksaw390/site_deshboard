$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('nav').toggleClass('active')
	});

	$('ul li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
	});
// .................................................................	
	$("ul li").hover(function(){
		$('li').removeClass('activemenu');
		$(this).parents('li').addClass('activemenu');		
	})
// ..........................................................
});



	$(window).on('scroll', function(){
		if ($(window).scrollTop()){
			$('header').addClass('black');
		}
		else
		{
			$('header').removeClass('black');
		}
	});
 