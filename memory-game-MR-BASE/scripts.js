// ---------------------------------------------------------------
// --------------------------GLOBALS------------------------------
// ---------------------------------------------------------------


//lets make an array that holds all of the cards 
var cards = [
	'<img src="Images/MR BASE DIGITAL CRAFTS.png">',
	'<img src="Images/MR BASE.png">',
	'<img src="Images/MR-BASE-EYEBROWS.png">',
	'<img src="Images/MR-BASE-Mad-Scientist.png">'
]



$(document).ready(function(){
	var gridSize = 8; //make 8 cards 
	var memoryGameHTML = ""; //empty to start 
	var card; 

	
	for (var i = 0; i < gridSize; i++){
		//bring in the various Mr base card values
		if(i < 2){
			card = cards[0]; //sets card to cards index 0
		}else if(i < 4){
			card = cards[1];
		}else if(i < 6){
			card = cards[2];
		}else if(i < 8){
			card = cards[3];
		}

		// lets target memoryGame contents
		// add to HTML after cards have been built		
		memoryGameHTML += '<div class="memoryGame-slot-holder col-sm-3">';//make the card take up 1/4 of the page
			memoryGameHTML += '<div class="memoryGame-slot-holder-inner">';//
				
				memoryGameHTML += '<div class="frontCard">';
					memoryGameHTML+= card;//add card in this div
				memoryGameHTML += '</div>';

				memoryGameHTML += '<div class="backCard">';
				memoryGameHTML += '</div>';

			memoryGameHTML += "</div>";
		memoryGameHTML += "</div>";
	}
		// after you have the layout set up, target HTML and add it
	$(".memoryGame-contents").html(memoryGameHTML);

	// lets add the flip function
	$(".memoryGame-slot-holder-inner").click(function(){
		$(this).toggleClass("flip");
		console.log("hi");

		var cardsUp = $(".flip");
		console.log(cardsUp);

		if(cardsUp.length == 2){
			var cardsUpImages = cardsUp.find(".frontCard img");
			//goes through the cardsUp cards and returns the images of the front side of the card, assigns them to a new array

			if (cardsUpImages[0].src == cardsUpImages[1].src){
				console.log("match");
				// cardsUp.addClass("matched");
				// cardsUp.removeClass("flip");
			}
		}
	})	

	// find the cards with teh class flip
	

	


})

//this holds the 4 types of different carfds 

