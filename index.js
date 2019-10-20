//create matrix of 7 X 14

function createBoard(columnSize, rowSize) {
    let board = []
    let row = []
    for (let i = 0; i < columnSize; i++) {
        for (let j = 0; j < rowSize; j++) {
            row.push(0)
        }
        board.push(row)
        row = []
    }

    board[3][0] = 3
    board[3][1] = 2
    board[3][2] = 1
    board[3][3] = 3
    board[3][4] = 3
    board[3][5] = 3
    board[3][5] = 3
    board[3][7] = 1
    board[3][8] = 3
    board[3][9] = 3
    board[3][10] = 3
    board[3][11] = 3
    board[3][12] = 3
    board[3][13] = 2
    board[2][5] = 3
    board[4][5] = 3
    board[2][6] = 2
    board[4][6] = 2


    board[9][0] = 3
    board[9][1] = 2
    board[9][2] = 1
    board[9][3] = 3
    board[9][4] = 3
    board[9][5] = 3
    board[9][5] = 3
    board[9][7] = 1
    board[9][8] = 3
    board[9][9] = 3
    board[9][10] = 3
    board[9][11] = 3
    board[9][12] = 3
    board[9][13] = 2
    board[8][5] = 3
    board[10][5] = 3
    board[8][6] = 2
    board[10][6] = 2
    // console.log(board)
    // changeState(board)
    return board
}

// console.log(board)

//set up starting board 
// 0 = empty (black)
// 1 = electron head (blue)
// 2 = electron tail (red)
// 3 = conductor (yellow)

let board = createBoard(14, 14)

// board[0][0] = 3
// board[0][1] = 2
// board[0][2] = 1
// board[3][0] = 3
// board[3][1] = 2
// board[3][2] = 1
// board[3][3] = 3
// board[3][4] = 3
// board[3][5] = 3
// board[3][5] = 3
// board[3][7] = 1
// board[3][8] = 3
// board[3][9] = 3
// board[3][10] = 3
// board[3][11] = 3
// board[3][12] = 3
// board[3][13] = 2
// board[2][5] = 3
// board[4][5] = 3
// board[2][6] = 2
// board[4][6] = 2

//determine out of boards

function isOutOfBounds(rowIndex, array) {
    if (rowIndex <= 0 || rowIndex >= array.length) {
        return true
    } else {
        return false
    }
}

//check neighbour 

function checkNeighbour(columnIndex, rowIndex, board) {
    if (isOutOfBounds(rowIndex, board) == false) {
        let neighbourRowIndex = rowIndex - 1
        // let neighbour = [columnIndex, neighbourRowIndex]
        neighbourValue = board[columnIndex][neighbourRowIndex]
        // console.log("neighbourValue " + neighbourValue)
        return neighbourValue
    } else if (isOutOfBounds(rowIndex, board) == true) {
        return neighbourValue = 0
    }
}
// }

//change state depending on neighbour

function changeState(board) {

    let newBoard = JSON.parse(JSON.stringify(board))

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {

            if (checkNeighbour(i, j, board) == 1) {
                newBoard[i][j] = 2
            } else if (checkNeighbour(i, j, board) == 2) {
                newBoard[i][j] = 3
            } else if (checkNeighbour(i, j, board) == 3) {
                newBoard[i][j] = 1
            } else if (checkNeighbour(i, j, board) == 0) {
                newBoard[i][j] = 0
            } else if (checkNeighbour(i, j, board) == 7) {
                newBoard[i][j] = 9
            }
        }
    }

    console.log(board)
    console.log(newBoard)
    return newBoard
}




let boardDiv = document.getElementById("board");
boardDiv.addEventListener('DOMContentLoaded', displayBoard(board))

function displayBoard(board) {
    let resultsToPrint = [];
    for (let i = 0; i < board.length; i++) {
        resultsToPrint += board[i]
        resultsToPrint += "<br>"
        console.log(board[i])
    }
    boardDiv.innerHTML = resultsToPrint
}


const refreshInteral = 100

let boardToShow = createBoard(14, 14)


function repeatTimeOut() {
    setTimeout(() => {
        displayBoard(boardToShow)
        boardToShow = changeState(boardToShow)
        repeatTimeOut()
    }, refreshInteral)
}


repeatTimeOut()

// let board = createBoard(size)


// function repeatTimeOut() {
//     setTimeout(() => {
//         displayBoard(board)
//         board = nextBoard(board)
//         repeatTimeOut()
//     }, refreshInteral)
// }















