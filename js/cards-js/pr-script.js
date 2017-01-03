	window.onscroll = function() {
		var topScroll = window.pageYOffset;
		var privacyMenu = document.querySelector(".privacy__menu");
		var privacyHeader = document.querySelector(".privacy__header");
		var privacyMenuHeight = parseInt(window.getComputedStyle(privacyMenu).height);
		var privacyHeaderHeight = parseInt(window.getComputedStyle(privacyHeader).height);
		var heightBeforeScroll = privacyMenuHeight + privacyHeaderHeight;
		var sideBar = document.querySelector(".privacy__sidebar");
		var menu_selector = ".privacy__sidebar"; 
		if (topScroll > heightBeforeScroll) {
			
			$(document).ready(function () {
				$(document).on("scroll", onScroll);

				$('a[href^="#"]').on('click', function (e) {
					e.preventDefault();
					$(document).off("scroll");

					$('a').each(function () {
						$(this).removeClass('privacy__sidebar-list-item--current');
					})
					$(this).addClass('privacy__sidebar-list-item--current');

					var target = this.hash;
					$target = $(target);
					$('html, body').stop().animate({
						'scrollTop': $target.offset().top+2
					}, 500, 'swing', function () {
						window.location.hash = target;
						$(document).on("scroll", onScroll);
					});
				});
			});

			function onScroll(event){
				var scrollPosition = $(document).scrollTop();
				$('nav.1 a').each(function () {
					var currentLink = $(this);
					var refElement = $(currentLink.attr("href"));
					if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
						$('nav.1 ul li a').removeClass("privacy__sidebar-list-item--current");
						currentLink.addClass("privacy__sidebar-list-item--current");
					}
					else{
						currentLink.removeClass("privacy__sidebar-list-item--current");
					}
				});
			}
			sideBar.classList.add("fixed");
		} else {
			sideBar.classList.remove("fixed");
		};
		var privacyContent = document.querySelector(".privacy__content");
		var privacyContentHeight = parseInt(window.getComputedStyle(privacyContent).height) + parseInt(window.getComputedStyle(privacyContent).paddingBottom) + privacyHeaderHeight;
		var privacySidebar = document.querySelector(".privacy__sidebar");
		var privacySidebarHeight = parseInt(window.getComputedStyle(privacySidebar).height) + parseInt(window.getComputedStyle(privacySidebar).paddingTop);
		console.log("privacyContentHeight = " , privacyContentHeight);
		console.log("topScroll = " , topScroll);
		console.log("privacySidebarHeight = " , privacySidebarHeight);
		if (topScroll > (privacyContentHeight - privacySidebarHeight)  ) {
			sideBar.classList.add("fixed-bottom");
			sideBar.style.marginTop = "-" + privacySidebarHeight + "px";
		}	else {
			sideBar.classList.remove("fixed-bottom");
			sideBar.style.marginTop = 0;
		};
	}










