var cards = [
	'<img src="http://www.relatably.com/m/img/iron-man-meme-generator/mc-iron-man-meme-generator-stop-i-am-iron-man-ce3373.jpg">',
	'<img src="image2.png">',
	'<img src="animal-kingdom-night-14.jpg">'
];



// All code will wait until the DOM is ready!
$(document).ready(function(){
	var gridSize = 8;



	// var card = '<img src="http://www.relatably.com/m/img/iron-man-meme-generator/mc-iron-man-meme-generator-stop-i-am-iron-man-ce3373.jpg">';

	var mgHTML = '';
	for(var i = 0; i < gridSize; i++){
		if(i < 4){card = cards[0];
		}else if(i<6){
			card = cards[1];
		}else{
			card = cards[2];
		}
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}

    $('.mg-contents').html(mgHTML);

    //top portion runs and then we need to add a listener

    $('.mg-tile-inner').click(function(){
    	$(this).toggleClass('flip');
    
    console.log("hi");

    var cardsUp = $('.flip');
    console.log(cardsUp);
    // cards up builds an array 
	    if(cardsUp.length == 2){
	    	var cardsUpImages = cardsUp.find(".mg-front img");
	    	if(cardsUpImages[0].src == cardsUpImages[1].src){
	    		// match found
	    		console.log("match");
	    		cardsUp.addClass("matched");
	    		cardsUp.removeClass("flip");
	    	}else{
	    		// user has flipped two cards that do not match. Flip them back over
	    		setTimeout(function(){
	    			cardsUp.removeClass("flip");
	    		}, 2000);
	    	}

	    }
	})

});