function oldEnough(age: number): never | boolean {
    if(age > 59) {
        throw Error('Too old!')
    }

    if(age >= 18) {
        return false
    }

    return true
}

class Board {
    private board: Array<Array<string>>

    constructor() {
        board = new Array(new Array)
        this.constructBoard()
    }

    private constructBoard(): void {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                board[0][0] = ' '
            }
        }
    }

    public printBoard(): void {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                console.log(board[0][0])
            }

            console.log('\n')
        }
    }
}

let board: Board = new Board()
board.printBoard()