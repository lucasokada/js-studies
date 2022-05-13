function oldEnough(age) {
    if (age > 59) {
        throw Error('Too old!');
    }
    if (age >= 18) {
        return false;
    }
    return true;
}
var Board = /** @class */ (function () {
    function Board() {
        board = new Array(new Array);
        this.constructBoard();
    }
    Board.prototype.constructBoard = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                board[0][0] = ' ';
            }
        }
    };
    Board.prototype.printBoard = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                console.log(board[0][0]);
            }
            console.log('\n');
        }
    };
    return Board;
}());
var board = new Board();
board.printBoard();
