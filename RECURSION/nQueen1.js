let grid = [["_", "_", "_", "_"],
            ["_", "_", "_", "_"],
            ["_", "_", "_", "_"],
            ["_", "_", "_", "_"]]

let N = grid.length
 

function isSafe(currentRow, currentColumn, grid) {
    
    //check if the column is clear?
    for (let i = currentRow - 1; i >= 0; i--) {
        if (grid[i][currentColumn] == "Q") return false
    }
    //check the upperpart of left diagonal
    for (let i = currentRow - 1, j = currentColumn - 1; i >= 0 && j >= 0; i--, j--) {
        if (grid[i][j] == "Q") return false
    }
    ///checks the right diagonal above the current row
    for (let i = currentRow - 1, j = currentColumn + 1; i >= 0 && j < N; i--, j++) {
        if (grid[i][j] == "Q") return false
    }
    return true
}



let countOfOutputGrids = 0 //to count total number of outputs
function NQueen(row, grid) {
    if (row == N) {
        console.log(grid)
        countOfOutputGrids++     
        return false //if returned true only one output grid will be printed
    }

    let queenPlaced = false
    for (let column = 0; column < N; column++) {
        if (isSafe(row, column, grid)) {
            grid[row][column] = "Q"

            queenPlaced = NQueen(row + 1, grid) //calls the function to place queen in next row
            if (queenPlaced == false) {
                grid[row][column] = "_" //if couldnt place queen in next row, it back tracks
            }
            else {return true} 

        }
        
    }
    return queenPlaced
}
NQueen(0,grid)
console.log("Number of possible outputs : ",countOfOutputGrids)

