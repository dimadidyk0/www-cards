
   function changeRangeValue() {

    	var rangeValue = document.getElementById("other-range-size").value;
    	var textValue = document.getElementById("range-value");
    	textValue.innerHTML = rangeValue;
    	var rangeTextIndent = 8 + 10*rangeValue;
		document.getElementById("range-text").style.left = String(rangeTextIndent)+"%";
   }

	window.onscroll = function() {

		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		var fixMenu = document.getElementById("fix-menu");
		if (scrolled > 110) {
			fixMenu.classList.add("header__menu--fixed");
		} else if (scrolled < 110) {
			fixMenu.classList.remove("header__menu--fixed");
		} 

	}

	$(document).ready(function(){
		
  		$("#fix-menu").on("click","a", function (event) {
       	event.preventDefault();
       	var id  = $(this).attr('href'),
       	top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);

    });

});




