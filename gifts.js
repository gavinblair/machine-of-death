var gifts = function() {
	this.deck = [
		'FOOD',
		'SPORTS EQUIPMENT',
		'SPORTS EQUIPMENT',/*
		'SPORTS EQUIPMENT',
		'MUSICAL INSTRUMENT',
		'MUSICAL INSTRUMENT',
		'MUSICAL INSTRUMENT',
		'EVENT / SOCIAL CIRCUMSTANCE',
		'EVENT / SOCIAL CIRCUMSTANCE',
		'EVENT / SOCIAL CIRCUMSTANCE',
		'PERSON / PROFESSION',
		'PERSON / PROFESSION',
		'FURNITURE',
		'FURNITURE',
		'FURNITURE',
		'TECHNOLOGY',
		'TECHNOLOGY',
		'TECHNOLOGY',
		'FOOD',
		'FOOD',
		'WEAPON',
		'WEAPON',
		'WEAPON',
		'VEHICLE',
		'VEHICLE',
		'VEHICLE',
		'ANIMAL',
		'ANIMAL',
		'ANIMAL',
		'PERSON / PROFESSION',
		'5 LETTERS LONG',
		'5 LETTERS LONG',
		'3 LETTERS LONG',
		'3 LETTERS LONG',
		'NATURE',
		'NATURE',
		'NATURE',
		'TOOL / DEVICE / MACHINE',
		'TOOL / DEVICE / MACHINE',
		'TOOL / DEVICE / MACHINE',
		'MYTHOLOGICAL CREATURE',
		'SOMETHING RED',
		'SOMETHING RED',
		'SOMETHING WHITE',
		'SOMETHING WHITE',
		'SMALLER THAN A GOLF BALL',
		'SMALLER THAN A GOLF BALL',
		'8 LETTERS LONG',
		'8 LETTERS LONG',
		'5 LETTERS LONG',
		'LIQUID',
		'LIQUID',
		'LIQUID',
		'MADE OF PAPER',
		'MADE OF PAPER',
		'MADE OF PAPER',
		'MADE OF METAL',
		'MADE OF METAL',
		'MADE OF METAL',
		'MYTHOLOGICAL CREATURE',
		'FACILITY / STRUCTURE / PLACE',
		'FACILITY / STRUCTURE / PLACE',
		'DISGUISE',
		'DISGUISE',
		'DISGUISE',
		'THINGS THAT DON\'T EXIST',
		'THINGS THAT DON\'T EXIST',
		'A GAS',
		'A GAS',
		'A GAS',
		'FACILITY / STRUCTURE / PLACE',
		'CREATED BEFORE 1900',
		'CREATED SINCE 2000',
		'SOMETHING BROKEN',
		'SOMETHING BLACK',
		'SOMETHING BLACK',
		'SOMETHING BROKEN',
		'SOMETHING BROKEN',
		'CREATED SINCE 2000',
		'CREATED BEFORE 1900',
		'A SPECIFIC WALRUS',
		'A SPECIFIC WALRUS',
		'SOMETHING HEAVY',
		'SOMETHING HEAVY',
		'SOMETHING HEAVY',
		'SOMETHING THAT RHYMES',
		'SOME KIND OF BABY',
		'SOMETHING THAT RHYMES',
		'SOME KIND OF BABY',
		'SOME KIND OF BABY',
		'A REAL-LIFE ROBOT',
		'A REAL-LIFE ROBOT',
		'SHIPPING MATERIALS',
		'SHIPPING MATERIALS',
		'SOMETHING THAT FLOATS',
		'SOMETHING THAT FLOATS',
		'SOMETHING ROUND',
		'SOMETHING THAT FLOATS',
		'SOMETHING ROUND',
		'SOMETHING ROUND',
		'SOMETHING ONLY CHILDREN BELIEVE IN',
		'SOMETHING ONLY CHILDREN BELIEVE IN',
		'SOMETHING CANADIAN',
		'SOMETHING CANADIAN',
		'FANCY PANTS',
		'FANCY PANTS',
		'STUFF YOUR MOTHER WARNED YOU ABOUT',
		'STUFF YOUR MOTHER WARNED YOU ABOUT',
		'SOMETHING POISONOUS',
		'SOMETHING POISONOUS',
		'ADVENTURING GEAR',
		'A PUBLIC DOMAIN CHARACTER',
		'A PUBLIC DOMAIN CHARACTER',
		'A PUBLIC DOMAIN CHARACTER',
		'A SPACEFARING OBJECT',
		'A SPACEFARING OBJECT',
		'SHINY THINGS',
		'SHINY THINGS',
		'SOMETHING NOTED FOR ITS TEETH',
		'SOMETHING NOTED FOR ITS TEETH',
		'ADVENTURING GEAR',
		'MYSTERIOUS ARTIFACT',
		'HEADWEAR',
		'MYSTERIOUS ARTIFACT',
		'HEADWEAR',
		'HEADWEAR',
		'SPOILED FOOD',
		'SPOILED FOOD',
		'A RAW MATERIAL',
		'A RAW MATERIAL'*/
	];
	this.hand = [];

	this.draw = function(){
		//deck empty?
		if(this.deck.length > 0){
			var i = Math.floor(Math.random()*this.deck.length);
			var result = this.deck[i];
			delete this.deck[i];
			var temp = [];
			for(var x in this.deck){
				if(this.deck[x] !== undefined){
					temp.push(this.deck[x]);
				}
			}
			this.deck = temp;
			for(var y in this.hand){
				if(this.hand[y].card === result){
					result = "ANOTHER "+result;
				}
			}
			if(result.indexOf("ANOTHER ANOTHER ") === 0){
				result = result.replace("ANOTHER ANOTHER ", "YET ANOTHER ");
			}
			
			this.hand.push({card:result, difficulty: 2});
			return result;
		} else {
			//the deck is empty!
			return false;
		}
	};

	this.discard = function(card){
		for(var i in this.hand){
			if(this.hand[i] !== undefined && this.hand[i].card === card){
				delete this.hand[i];
				var temp = [];
				for(var x in this.hand){
					if(this.hand[x] !== undefined){
						temp.push(this.hand[x]);
					}
				}
				this.hand = temp;
			}
		}
	};
	this.roll = function(card){
		//get a random number between 1 and 6
		for(var i in this.hand){
			if(this.hand[i].card === card){
				var difficulty = this.hand[i].difficulty;
				this.discard(card);
				var num = Math.floor(Math.random()*6)+1;
				if(num >= difficulty){
					return true;
				} else {
					return false;
				}
				break;
			}
		}
		
	};
};
