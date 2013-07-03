var budget = function() {
	this.cards = [];
	this.add = function(card){
		this.cards.push(card);
	};
	this.remove = function(card){
		for(var i in this.cards){
			if(this.cards[i] === card){
				delete this.cards[i];
			}
		}
		var temp = [];
		for(var x in this.cards){
			if(this.cards[x] !== undefined){
				temp.push(this.cards[x]);
			}
		}
		this.cards = temp;
	};
};