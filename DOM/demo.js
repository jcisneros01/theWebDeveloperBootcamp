var li = document.getElementsByTagName("li");

for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
}