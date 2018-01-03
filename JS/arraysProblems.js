// var posts = [
// 	{
// 		title: "cats are mediocre",
// 		author: "colt"
// 		comments: ["Awesome post", "Terrible post"]
// 	},
// 	{
// 		title: "Cats are actually awesome",
// 		author: "Cat Luvr"
// 		comments: ["<3", "Go to hell I hate you"]
// 	}
// ]
// var person =  someObject.friends[0].name;



var movies = [
	{
		title: "The Grand Budapest Hotel",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Tiny Furniture",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Submarine",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Julieta",
		rating: 5,
		hasWatched: false
	}
]

for (var i = 0; i < movies.length; i++) {
	var string = "";

	// Check if watched
	if (movies[i].hasWatched === true) {
		string+= "You have watched ";
	} else {
		string+= "You have not seen ";
	}

	//add title
	string += '"' + movies[i].title + '"';;

	//add rating
	string += " - " + movies[i].rating + " stars";
	
	console.log(string);

}