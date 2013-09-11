
test( 'hello test', function() {
	ok( 1 == '1', 'QUnit is working!' );
});

test('aftermath', function(){
	var a = new Aftermath();
	var o1 = a.options;
	var r = a.tryOne();
	var o2 = a.options;
	ok(o1.indexOf(r), 'got an aftermath from the list');
	ok(o1.length === (o2.length+1), 'successfully depleted aftermath options');
});

test('budget', function(){
	var budget = new Budget();

	budget.add('test card');
	ok(budget.hand[0] === 'test card', 'successfully added card to budget');

	budget.add('test card 2');
	budget.add('test card 3');
	budget.remove('test card 2');
	ok(budget.hand.length === 2, 'successfully removed a card');


	var budget2 = new Budget();
	ok(budget.hasBudget() && !budget2.hasBudget(), 'hasbudget works');
});

test('gifts', function(){
	var gifts = new Gifts();
	
	var deckcount = gifts.deck.length;
	var draw1 = gifts.draw();
	var deckcount2 = gifts.deck.length;

	ok(draw1.length, 'drew a card');
	ok(deckcount === (deckcount2+1), 'successfully depleted deck');
	ok(gifts.hand.length === 1, 'got a hand');

	//somehow test the 'another another' thing
	for(var i in gifts.deck){
		gifts.draw();
	}

	var anotheranother = false;
	var yetanother = false;
	var another = false;
	for(var j in gifts.hand){
		if(gifts.hand[j].card.indexOf('ANOTHER ') !== -1){
			another = true;
		}
		if(gifts.hand[j].card.indexOf('ANOTHER ANOTHER ') !== -1){
			anotheranother = true;
		}
		if(gifts.hand[j].card.indexOf('YET ANOTHER ') !== -1){
			yetanother = true;
		}
	}
	ok(!anotheranother, 'no another anothers'+anotheranother);
	ok(another, 'another present');
	ok(yetanother, 'yet another present');

	var handcount = gifts.hand.length;
	var gettingridof = gifts.hand[0].card;
	gifts.discard(gettingridof);
	ok(gifts.hand.length === (handcount-1), 'discard worked');
	ok(gifts.hand[0].card !== gettingridof, 'discarded the right card');

	ok(gifts.hand[0].difficulty === 2, 'difficulty default');
});

test('session', function(){
	var session = new Session(4);

	ok(session.missions.length === 4, 'numtargets set'+session.missions.length);

	ok(session.giftCards.hand.length === 3, 'drew three cards');
});



/*asyncTest( 'wipe Test', function() {
	expect( 1 );
	show('add');
	
	wipe('word', 'right');
	setTimeout(function(){
		ok( $('#word .item.active').text() === 'Blank' , 'wipe works' );
		start();
	}, 500);
});*/

