
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

});
    