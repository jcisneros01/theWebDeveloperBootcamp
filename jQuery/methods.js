$("h1").text("Hi!");
$('ul').html("<li> I hacked your UL!</li>");
$('li').html("<a href='http://www.google.com'>Google</a>");
$('img').css("width", "500px");
// $('img').attr("src", "https://c1.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
$('input').attr("type", "text")
$('img').css("width", "200px");
$('input').val("rusty");

$('input').keypress(function(event){
	if(event.which == 13) {
		alert("you hit enter");
	}
});