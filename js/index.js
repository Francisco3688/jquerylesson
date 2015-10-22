$(document).ready(function() {

	$("#Square").click(function(){
		alert("Thanks for clicking");
	});

	$("#fade").fadeIn(4000);

	$("#slide").slideUp(6000);

	$("#attr").click(function(){
		$("#gb").attr("src", "images/avengers.jpg");
	});
});