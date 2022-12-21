let board = [[0,0,0,0],
         [0,0,0,0],
         [0,0,0,0],
         [0,0,0,0]]
         let N = board.length

function isSafe(board,i,j){
    return(i>=0 && j>=0 && i<N && j<N && board[i][j]== 0)
}

function knightTour(board,i,j,move){
if(isSafe(board,i,j)){ 
    if(move == N*N){
        board[i][j]=move
        console.log(board)
        board[i][j]= 0
        return       
    }

    board[i][j] = move
    // console.log(board)
    knightTour(board,i+2,j+1,move+1)
    knightTour(board,i+2,j-1,move+1)
    knightTour(board,i-2,j+1,move+1)
    knightTour(board,i-2,j-1,move+1)
    knightTour(board,i+1,j+2,move+1)
    knightTour(board,i+1,j-2,move+1)
    knightTour(board,i-1,j+2,move+1)
    knightTour(board,i-1,j-2,move+1)
    board[i][j] = 0
    return

}
return
}
knightTour(board,2,2,1)

