$(document).ready(function() {

	// Pluso  -  social
	(function() {
		if (window.pluso)if (typeof window.pluso.start == "function") return;
		if (window.ifpluso==undefined) { window.ifpluso = 1;
			var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
			s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
			s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://share.pluso.ru/pluso-like.js';
			var h=d[g]('body')[0];
			h.appendChild(s);
		};
	})();

	// Active link main menu
	$('.l-r-menu .top-menu-item').removeClass('active');
	var path = window.location.pathname;
	$('.l-r-menu .top-menu-item a').each(function() {
		var href = $(this).attr('href');
		if(path.slice(1).substring(0, href.length) === href) {
			$(this).parent('.top-menu-item').addClass('active');
		}
	});

});