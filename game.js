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
		document.getElementById('content').innerHTML = ich.start({difficulty: this.difficulty});
	};
	this.aboutButton = function(){
		document.getElementById('content').innerHTML = ich.about();
	};
	this.backButton = function(){
		document.getElementById('content').innerHTML = ich.splash();
	};
	this.nextTargetButton = function(){
		//show the target
		this.target = this.newGame.missions.shift();

		//next step: visit the black market
		document.getElementById('content').innerHTML = ich.target({target: this.target, button:true});
	};
	this.predictionButton = function(){
		document.getElementById('content').innerHTML = ich.prediction({target: this.target, button:true});
	};
	this.marketButton = function(){
		//show gifts
		document.getElementById('content').innerHTML = ich.blackmarket({hand: this.newGame.giftCards.hand});
	};

	this.planButton = function(){
		//allow drag+drop reordering of gifts
		//allow option to swap gifts with items from the budget
		//allow setting difficulty of each gift

		document.getElementById('content').innerHTML = ich.planning({target: this.target, hand: this.newGame.giftCards.hand, hasBudget: this.myBudget.hasBudget()});
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
				break;
			}
		}
	};
	this.executeButton = function(){
		//start a 90 second timer if it hasn't already started
		if(this.timer === undefined){
			this.timer = new countdown(90, updateTimer, finishedTime);
		}
		document.getElementById('content').innerHTML = ich.execute({hand: this.newGame.giftCards.hand, target: this.target, hasBudget: this.myBudget.hasBudget()});
	};
	var updateTimer = function(t){
		document.getElementsByTagName("h2")[0].innerHTML = t;
	};
	var finishedTime = function(){
		document.getElementsByTagName("h2")[0].innerHTML = "Time's up!";
	};
	this.toggleTimer = function(e){
		if(e.className.indexOf("active") !== -1){
			this.timer.resume();
		} else {
			this.timer.pause();
		}
	};
	this.rollButton = function(card, e){
		
		//either way we are discarding this card
		e.parentNode.removeChild(e);
		if(newGame.giftCards.roll(card)){
			//success
			alert("Success!");
			//any more?
			var as = document.getElementsByTagName('a');
			var found = false;
			for(var i in as) {
				if(as[i].className !== undefined && as[i].className.indexOf("button-positive") !== -1){
					found = true;
					break;
				}
			}
			if(!found){
				//that was the last step!
				this.moveOn();
			}
		} else {
			//fail
			alert("Fail!");
			this.newGame.giftCards.draw();
			document.getElementById('content').innerHTML = ich.planning({target: this.target, hand: this.newGame.giftCards.hand, hasBudget: this.myBudget.hasBudget(), playing: true});
			
		}
	};
	this.moveOn = function(){
		alert("moving on...");
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
