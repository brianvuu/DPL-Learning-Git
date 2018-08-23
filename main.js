

document.addEventListener("DOMContentLoaded", function(){      //VAR, FUNCTION
	
	//variables

	var player
	var name = document.getElementById('name');
	var startButton = document.getElementById('start-button');
	var top = document.getElementById('top');
	var gameArea = document.getElementById('game-area');
	var numGuesses = 0;
	var correctGuesses = 0;
	var ballPosition
	var userGuess
	
	name.addEventListener('keyup', function(event){		
		if (event.target.value !== '') {
			startButton.className=''
		} else {
			startButton.className="hide"
		} 
	})



	//functions

	function genBallPosition() {
		// generate winning location
	}

	function incCounters() {
		// if correct guess, increment correct guess
		// if wrong guess, increment wrong guess
		// update scoreboard according
	}

	function calcAverage() {
		// worry about this last
		// divide winning from attempts 
	}

	function makeGuess() {
		genBallPosition()
	}
	

	function drawBoxes() {		// function when drawBoxes is called
		for (var i = 0; i < 3, i++){	// run this loop three times
			var box = document.createElement('div') 	// create a div
			box.className = 'box' 	// give it a class of 'box'
			box.id = 'box-'+i 		// give it an id of box-1, box-2, box-3
			gameArea.append(box)	// 
			box.addEventListener('click', makeGuess){
			}
		}
	}

	function startGame(){
		player = name.value
		startButton.className = "hide"
		var label = document.createElement('p')
		label.innerHTML = 'Welcome ' + player
		label.className = 'center'
		top.append(label)
		drawBoxes()
	}

	startButton.addEventListener('click', startGame)

	});
