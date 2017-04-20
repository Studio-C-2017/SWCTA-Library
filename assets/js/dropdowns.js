/*
 * A note from Studio C 2017
 * This code is in charge of making the dropdowns
 * on the resources page of the libary work correctly.
 * We did not write this, Studio C 2013 did.
 */

$(document).ready(function(){

	/*DROP DOWNS*/
	$(".website").hide();
	$("#site0").click(function(){
		$("#website0").slideToggle("slow", function(){
			$("#site0").toggleClass("websiteHeaderOrange");
		});
	});
	$("#site1").click(function(){
		$("#website1").slideToggle("slow", function(){
			$("#site1").toggleClass("websiteHeaderOrange");
		});
	});
	$("#site2").click(function(){
		$("#website2").slideToggle("slow", function(){
			$("#site2").toggleClass("websiteHeaderOrange");
		});
	});
	$("#site3").click(function(){
		$("#website3").slideToggle("slow", function(){
			$("#site3").toggleClass("websiteHeaderOrange");
	    });
	});
	$("#site4").click(function(){
		$("#website4").slideToggle("slow", function(){
			$("#site4").toggleClass("websiteHeaderOrange");
		});
	});
	$("#site5").click(function(){
		$("#website5").slideToggle("slow", function(){
			$("#site5").toggleClass("websiteHeaderOrange");
		});
	});
	$("#site6").click(function(){
		$("#website6").slideToggle("slow", function(){
			$("#site6").toggleClass("websiteHeaderOrange");
		});
	});
	$("#site7").click(function(){
		$("#website7").slideToggle("slow", function(){
			$("#site7").toggleClass("websiteHeaderOrange");
		});
	});
	/*END DROP DOWNS*/


});
