$(window).ready(function() {
    width = $(this).width();
    if(width > 992) {
		var lastScrollTop = 0;
		$(window).scroll(function(event){
		   var st = $(this).scrollTop();
		   if (st > lastScrollTop){
		       $("#second-navbar").removeClass("show-navbar").addClass("hide-navbar");
		   } else {
		      $("#second-navbar").removeClass("hide-navbar").addClass("show-navbar");
		   }
		   lastScrollTop = st;
		});
	} else {
	$("#second-navbar").removeClass("hide-navbar").addClass("show-navbar");
	}
});

$(window).resize(function() {
    width = $(this).width();
    if(width > 992) {
		var lastScrollTop = 0;
		$(window).scroll(function(event){
		   var st = $(this).scrollTop();
		   if (st > lastScrollTop){
		       $("#second-navbar").removeClass("show-navbar").addClass("hide-navbar");
		   } else {
		      $("#second-navbar").removeClass("hide-navbar").addClass("show-navbar");
		   }
		   lastScrollTop = st;
		});
	} else {
	$("#second-navbar").removeClass("hide-navbar").addClass("show-navbar");
	}
});
