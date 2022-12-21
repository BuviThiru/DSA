var grid = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
];

let m = grid.length
let n = grid[0].length

function isSafe(grid,row,column){
 
    return (row >= 0 && row < grid.length && column >= 0 && column < grid[0].length && grid[row][column] == 1);
}

function ratInMaze(grid,x,y,ans){
    
    if(x==m-1 && y==n-1 && grid[x][y]==1){ //base case
        grid[x][y]="*";
        console.log(ans)
        return true
    }

    if(isSafe(grid,x,y)){ 

     grid[x][y]="*" //do
     if(ratInMaze(grid,x+1,y,ans+"D")) return true   // recurse
     if(ratInMaze(grid,x-1,y,ans+"U")) return true
     if(ratInMaze(grid,x,y+1,ans+"R")) return true
     if(ratInMaze(grid,x,y-1,ans+"L")) return true
     grid[x][y]= 1 //backtrack
     return false

    }
return false

}
console.log(ratInMaze(grid,0,0,""))
console.log(grid)