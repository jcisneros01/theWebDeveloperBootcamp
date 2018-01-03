// Add event listener that completed todo by changing styling
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on x to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
});

// Create todo
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// Get todo from input
		var todoText = $(this).val();

		// clear input field
		$(this).val("");

		// Append to new li to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});