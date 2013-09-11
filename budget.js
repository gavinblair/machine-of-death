var Budget = function() {
	this.hand = [];
	this.add = function(card){
		this.hand.push(card);
	};
	this.remove = function(card){
		for(var i in this.hand){
			if(this.hand[i] === card){
				delete this.hand[i];
			}
		}
		var temp = [];
		for(var x in this.hand){
			if(this.hand[x] !== undefined){
				temp.push(this.hand[x]);
			}
		}
		this.hand = temp;
	};
	this.hasBudget = function(){
		return (this.hand.length > 0);
	};
};
