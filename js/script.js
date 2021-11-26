/*=============================================
BOTÓN MENÚ
=============================================*/
$(".botonMenu").click(function(){

	$(".menu").slideToggle('fast');
	$(".formReservas").slideUp('fast');

})

$(".menu ul li a").click(function(e){

	$(".menu").slideToggle('fast');

	e.preventDefault();
	var vinculo = $(this).attr("href");
	console.log("vinculo",vinculo);
	$("html, body").animate({
		scrollTop: $(vinculo).offset().top - 62

	}, 1000, "easeInOutBack")	
})


/*=============================================
SCROLL UP
=============================================*/

$.scrollUp({
	scrollText:"",
	scrollSpeed: 2000,
	easingType: "easeOutQuint"
})

