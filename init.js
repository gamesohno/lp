$(document).ready(function () {
    $(".thumbnail-selection-ring").delay(3000).fadeIn(300).attr("style", "display: none !important");
    $(".page-container").delay(3000).fadeIn(300).attr("style", "display: none !important");
    $(".reader-modal").delay(3000).fadeIn(300).attr("style", "display: none !important");
	$("body").on("contextmenu",function(e){
     return false;
	});
});

$('#login').click(function(){
   if($('#sign-up-email').val() == ''){
      $(".form-control-feedback").css({'display':'initial'});
   } else {
		$(".login-loading").css({'display':'initial'});
	setTimeout(function() {
		$(".modal-dialog").effect( "shake", {times:4}, 800 );
		$(".login-loading").css({'display':'none'});
		$(".login-message").css({'display':'inline-block'});
	},2000);
   }
});

var count = 587346;
function tick(){
    count += Math.round(Math.random()*5);
    $('.counter').text(count);
    setTimeout(tick,Math.round(1000+Math.random()*2000));
}
tick();

// DOM Ready
$(function() {

	var $el, $ps, $up, totalHeight;
	
	$(".sidebar-box .button").click(function() {
	
		// IE 7 doesn't even get this far. I didn't feel like dicking with it.
				
		totalHeight = 0
	
		$el = $(this);
		$p  = $el.parent();
		$up = $p.parent();
		$ps = $up.find("p:not('.read-more')");
		
		// measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
		$ps.each(function() {
			totalHeight += $(this).outerHeight();
			// FAIL totalHeight += $(this).css("margin-bottom");
		});
					
		$up
			.css({
				// Set height to prevent instant jumpdown when max height is removed
				"height": $up.height(),
				"max-height": 9999
			})
			.animate({
				"height": totalHeight
			});
		
		// fade out read-more
		$p.fadeOut();
		
		// prevent jump-down
		return false;
			
	});

});