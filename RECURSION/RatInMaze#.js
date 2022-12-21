var maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];

let m = maze.length
let n = maze[0].length
let ans  =[]

// creating visited array according to our input size
let visited =[]
for(let i =0;i<m;i++){
    let temp =[]
    for(let j=0;j<n;j++){
       temp[j]=0
    }
    visited.push(temp)
}

// console.log(visited)

function isSafe(maze,visited,i,j){
    return (i>=0 && j>=0 && i<m && j<n && visited[i][j] == 0 && maze[i][j]==1)
}

function ratInMaze (maze,visited,i,j, move){
    if(i==m-1 && j==n-1 && maze[i][j]==1){
        console.log(visited)
        ans.push(move)
        return
    }
   if(  isSafe(maze,visited,i,j)){
        visited[i][j] =1
        //down
        ratInMaze (maze,visited,i+1,j, move+"D")
        //left
        ratInMaze (maze,visited,i,j-1, move+"L")
        //right
        ratInMaze (maze,visited,i,j+1, move+"R")
        //up
        ratInMaze (maze,visited,i-1,j, move+"U")

        visited[i][j] = 0

    }
    // return false

}
ratInMaze(maze,visited,0,0,"")
console.log(ans)