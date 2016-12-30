
   function changeRangeValue() {

    	var rangeValue = document.getElementById("other-range-size").value;
    	var textValue = document.getElementById("range-value");
    	textValue.innerHTML = rangeValue;
    	var rangeTextIndent = 8 + 10*rangeValue;
		document.getElementById("range-text").style.left = String(rangeTextIndent)+"%";
   }

	// window.onscroll = function() {

	// 	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	// 	var fixMenu = document.getElementById("fix-menu");
	// 	if (scrolled > 110) {
	// 		fixMenu.classList.add("header__menu--fixed");
	// 	} else if (scrolled < 110) {
	// 		fixMenu.classList.remove("header__menu--fixed");
	// 	} 

	// }

	$(document).ready(function(){
		
  		$("#fix-menu").on("click","a", function (event) {
       	event.preventDefault();
       	var id  = $(this).attr('href'),
       	top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);

    });

});
	window.onscroll = function() {
		var topScroll = window.pageYOffset;
		var privacyMenu = document.querySelector(".privacy__menu");
		var privacyHeader = document.querySelector(".privacy__header");
		var privacyMenuHeight = parseInt(window.getComputedStyle(privacyMenu).height);
		var privacyHeaderHeight = parseInt(window.getComputedStyle(privacyHeader).height);
		var heightBeforeScroll = privacyMenuHeight + privacyHeaderHeight;
		var sideBar = document.querySelector(".privacy__sidebar");
		console.log("topScroll = " ,topScroll);
		console.log("heightBeforeScroll = " ,heightBeforeScroll);
		if (topScroll > heightBeforeScroll) {
			sideBar.classList.add("fixed");
		} else {
			sideBar.classList.remove("fixed");
		}
		var privacyContent = document.querySelector(".privacy__content");
		var privacyContentHeight = parseInt(window.getComputedStyle(privacyContent).height);
		if (topScroll > privacyContentHeight) {
			sideBar.classList.remove("fixed");
	}








