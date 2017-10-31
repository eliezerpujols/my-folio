/*
	Eliezer Pujols | This is my website :3
*/

$(document).ready(function() {
	
	triggerMenu();

	function triggerMenu() {
		$('.header__trigger').click(function(){
			$(".header").toggleClass('header--fixed');
			$(".menu").toggleClass('menu--open');		
		});
	}
});