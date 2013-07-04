/*
requires:
ICanHaz.js
budget.js
targets.js
session.js
gifts.js
*/
var game = function(){
	this.myBudget = new budget();


	//EVENTS
	var startButton = function(){
		//generate the game
		this.newGame = new session(4);

		//next step: next target button


	};
	var aboutButton = function(){

	}
	var nextTargetButton = function(){
	//show the target
	//next step: visit the black market
	};

	var marketButton = function(){
	//show gifts

	//next step: make the plan
	};

	var planButton = function(){
	//allow drag+drop reordering of gifts
	//allow option to swap gifts with items from the budget
	//allow setting difficulty of each gift

	//next step: execute
	};

	var executeButton = function(){
	//start a 90 second timer if it hasn't already started

	//show first/next gift, difficulty & roll button
	};

	var rollButton = function(step, difficulty){
	//get a random number between 1 and 6
	//if number >= difficulty, pass
	//otherwise fail

	//if pass (and we are in aftermath mode), draw a specialist card for the budget
	//if fail (and we are in aftermath mode), go back to aftermathButton()
	//if pass (and this wasn't the final step), show next gift, difficulty & roll button
	//if fail, show regroup button
	//if pass and this IS the third successful roll, win!
	};
	var regroupButton = function(){
	//discard failed card
	//draw a new gift card
	//show timer
	//allow drag+drop reordering of gifts
	//allow option to swap gifts with budget items
	//next step: execute
	};
	var timerEnd = function(){
	//time's up!
	//have we executed the current target?
	//if so, win!
	//if not, lose!
	};
	var win = function(){
	//if the timer is not up, enter aftermath!
	//if this isn't the last target, nextTargetButton
	//if it is, then win the whole game!
	};
	var lose = function(){
	//sorry, you lose.
	};
	var aftermathButton = function(){
	//if there are no available aftermaths to attempt, win()
	//otherwise...
	//still show timer
	//discard all used gift cards
	//grab a random aftermath option
	//draw a gift card
	//next step: roll button
	};

};
var app = new game();