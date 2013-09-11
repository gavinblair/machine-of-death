/*global Gifts: true, Targets: true */
var Session = function(numTargets){
	//generate the targets
	this.missions = [];
	for(var i = 1; i <= numTargets; i++){
		this.missions.push(Targets.generateTarget());
	}

	//get the gifts
	this.giftCards = new Gifts();
	for(var j = 1; j <= 3; j++){
		this.giftCards.draw();
	}

};