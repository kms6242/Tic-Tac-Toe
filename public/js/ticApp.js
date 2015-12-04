angular.module('ticApp', [])
	.controller('ticController', [function() {
		var tic = this;
		tic.moves = 0;
		tic.over = false;
		tic.player1 = "X";
		tic.player2 = "O";
		tic.currentPlayer = "";
		tic.board = {
			0:"",
			1:"",
			2:"",
			3:"",
			4:"",
			5:"",
			6:"",
			7:"",
			8:""
		};

		resetBoard = function() {
			tic.board = {
			0:"",
			1:"",
			2:"",
			3:"",
			4:"",
			5:"",
			6:"",
			7:"",
			8:""
			};
		}

		tic.start = function(){
			console.log('Started tic-tac-toe game.');
			tic.currentPlayer = tic.player1;
			resetBoard();
			tic.over = false;
		};

		tic.checkForWinner = function(){
			// horizontal wins
			if (((tic.board[0] == tic.board[1] && tic.board[1] == tic.board[2]) && tic.board[0] != "") || 
			((tic.board[3] == tic.board[4] && tic.board[4] == tic.board[5]) && tic.board[3] != "") || 
			((tic.board[6] == tic.board[7] && tic.board[7] == tic.board[8]) && tic.board[6] != "") || 
			// vertical wins
			((tic.board[0] == tic.board[3] && tic.board[3] == tic.board[6]) && tic.board[0] != "") || 
			((tic.board[1] == tic.board[4] && tic.board[4] == tic.board[7]) && tic.board[1] != "") || 
			((tic.board[2] == tic.board[5] && tic.board[5] == tic.board[8]) && tic.board[2] != "") || 
			// diagonal wins
			((tic.board[0] == tic.board[4] && tic.board[4] == tic.board[8]) && tic.board[0] != "") || 
			((tic.board[2] == tic.board[4] && tic.board[4] == tic.board[6]) && tic.board[2] != "")) {
				tic.over = true;
			}
		}
		
		tic.endGame = function() {
			alert("The game is over, click start to play again!");
		}
		
		tic.select = function(loc) {
			if(tic.over) {
				tic.endGame();
			}
			else if(tic.board[loc] != "") {
				alert("Please choose a different position!");
			}
			else {
				tic.moves++;
				tic.board[loc] = tic.currentPlayer;

				if (tic.currentPlayer == tic.player1) {
					tic.currentPlayer = tic.player2;
				}
				else {
					tic.currentPlayer = tic.player1;
				}
				tic.checkForWinner();
			}
		};
	}]);




