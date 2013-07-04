var session = function(numTargets){
	//generate the targets
	this.missions = [];
	for(var i = 0; i <= numTargets; i++){
		this.missions.push(targets.generateTarget());
	}

	//get the gifts
	this.giftCards = new gifts();
	for(var i = 1; i <= 3; i++){
		this.giftCards.draw();
	}

};