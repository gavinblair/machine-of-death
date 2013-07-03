var aftermath = function() {
	this.options = [
		'Destroy the evidence',
		'Confuse the witnesses',
		'Flee the scene',
		'Establish an alibi',
		'Comfort the target\'s next of kin',
		'Cater the target\'s wake'
	];
	this.tryOne = function(){
		var i = Math.floor(Math.random()*this.options.length);
		var result = this.options[i];
		delete this.options[i];
		var temp = [];
		for(var x in this.options){
			if(this.options[x] !== undefined){
				temp.push(this.options[x]);
			}
		}
		this.options = temp;
		return result;
	};
};