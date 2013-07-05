/*
requires:
ICanHaz.js
budget.js
targets.js
session.js
gifts.js
*/
var game = function(difficulty){
	this.myBudget = new budget();
	this.difficulty = difficulty;

	//EVENTS
	this.startButton = function(){
		//generate the game
		this.newGame = new session(this.difficulty);

		//show the game intro screen
		document.body.innerHTML = ich.start({difficulty: this.difficulty});
	};
	this.aboutButton = function(){
		document.body.innerHTML = ich.about();
	};
	this.backButton = function(){
		document.body.innerHTML = ich.splash();
	};
	this.nextTargetButton = function(){
		//show the target
		this.target = this.newGame.missions.shift();

		//next step: visit the black market
		document.body.innerHTML = ich.target({target: this.target, button:true});
	};
	this.predictionButton = function(){
		document.body.innerHTML = ich.prediction({target: this.target, button:true});
	};
	this.marketButton = function(){
		//show gifts
		document.body.innerHTML = ich.blackmarket({hand: this.newGame.giftCards.hand});
	};

	this.planButton = function(){
		//allow drag+drop reordering of gifts
		//allow option to swap gifts with items from the budget
		//allow setting difficulty of each gift

		var hasBudget = false;
		if(this.myBudget.length > 0) {
			hasBudget = true;
		}
		document.body.innerHTML = ich.planning({target: this.target, hand: this.newGame.giftCards.hand, hasBudget: hasBudget});
	};
	this.changeDifficulty = function(e){
		var oldnum = parseInt(e.children[0].innerHTML);
		var newnum = oldnum + 1;
		if(newnum > 6) { newnum = 2; }
		e.children[0].innerHTML = newnum;
		
		for(var i in this.newGame.giftCards.hand){
			//so we can add .difficulty
			if((this.newGame.giftCards.hand[i].card+newnum) == e.innerHTML.replace(/<[^>]*>/g, "")){
				this.newGame.giftCards.hand[i].difficulty = newnum;
			}
		}
	};
	this.executeButton = function(){
		//start a 90 second timer if it hasn't already started
		this.timer = new countdown(90, updateTimer, finishedTime);
		
		document.body.innerHTML = ich.execute({hand: this.newGame.giftCards.hand, target: this.target, hasBudget: hasBudget});
	};
	var updateTimer = function(t){
		document.getElementsByTagName("h2")[0].innerHTML = t+" seconds left!";
	};
	var finishedTime = function(){
		document.getElementsByTagName("h2")[0].innerHTML = "Time's up!";
	};
	this.toggleTimer = function(e){
		if(e.classList.contains("active")){
			clearInterval(this.timer.interval);
		} else {
			this.timer = new countdown(this.timer.current, updateTimer, finishedTime);
		}
	};
	this.rollButton = function(step, difficulty){
		//get a random number between 1 and 6
		
		//if number >= difficulty, pass
		//otherwise fail
	
		//if pass (and we are in aftermath mode), draw a specialist card for the budget
		//if fail (and we are in aftermath mode), go back to aftermathButton()
		//if pass (and this wasn't the final step), show next gift, difficulty & roll button
		//if fail, show regroup button
		//if pass and this IS the third successful roll, win!
	};
	this.regroupButton = function(){
	//discard failed card
	//draw a new gift card
	//show timer
	//allow drag+drop reordering of gifts
	//allow option to swap gifts with budget items
	//next step: execute
	};
	this.timerEnd = function(){
	//time's up!
	//have we executed the current target?
	//if so, win!
	//if not, lose!
	};
	this.win = function(){
	//if the timer is not up, enter aftermath!
	//if this isn't the last target, nextTargetButton
	//if it is, then win the whole game!
	};
	this.lose = function(){
	//sorry, you lose.
	};
	this.aftermathButton = function(){
	//if there are no available aftermaths to attempt, win()
	//otherwise...
	//still show timer
	//discard all used gift cards
	//grab a random aftermath option
	//draw a gift card
	//next step: roll button
	};

};
var app = new game(4);
