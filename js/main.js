
$(document).ready(function(){

	/*$("div#social").hide();*/

	/* click on contact to slide out social media */
	$( "a#contact" ).click(function (e) {
		e.preventDefault();
	    if ( $( "div#social" ).is( ":hidden" ) ) {
	        $( "div#social" ).slideDown("fast");
	    } else {
	        $( "div#social" ).slideUp("fast");
	    }
	});

    // Show chosen div, and hide all others
    $("a#game").click(function (e) 
    {
        e.preventDefault(); 
        if ( $("div#more" + $(this).attr("class")).is( ":hidden" )) {
        	$("div#more" + $(this).attr("class")).slideDown("fast");
    	} else {
    		$("div#more" + $(this).attr("class")).slideUp("fast");
    	}
    });

	//$('.fadeslideshow img:gt(0)').hide();

	/*setInterval(function () {
	    $('.fadeslideshow :first-child').fadeOut()
	                             .next('img')
	                             .fadeIn()
	                             .end()
	                             .appendTo('.fadeslideshow');
	}, 4000); // 4 seconds
	*/
	/*$(function(){
		$('img#games').each(function(e){
    		var src = $(e).attr('src');
    		$(e).hover(function(){
      			$(this).attr('src', src.replace('.gif', '_anim.gif'));
    		}, function(){
      			$(this).attr('src', src);
    		});
  		});
	});*/
});
