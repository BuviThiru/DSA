// function totalNumberOfWays(r, c, i, j) {
//     if (i >= r || j >= c) return 0
//     if (i == r - 1 && j == c - 1) return 1

//     let ways = totalNumberOfWays(r, c, i + 1, j) + totalNumberOfWays(r, c, i, j + 1)
//     return ways
// }
// // let arr = []
// console.log(totalNumberOfWays(3, 3, 0, 0))


// //for printing the path
// function totalNumberOfWaysAndPath(r, c, i, j, path) {
//     if (i >= r || j >= c) return 0
//     if (i == r - 1 && j == c - 1) {
//         console.log(path)
//         return 1
//     }

//     let ways = totalNumberOfWaysAndPath(r, c, i + 1, j, path + "R") + totalNumberOfWaysAndPath(r, c, i, j + 1, path + "D")
//     return ways
// }

// // let arr = []
// console.log(totalNumberOfWaysAndPath(3, 3, 0, 0, ""))


//for identifying the path with blocks
// function mazePathWithHuddles(arr, r, c, i, j, path) {
//     // console.log(arr[i][j])
//     if (arr[i][j]==0 || i >= r || j >= c ) return 0
//     if (i == r - 1 && j == c - 1) {
//         console.log(path)
//         return 1
//     }
//     let ways = mazePathWithHuddles(arr,r, c, i + 1, j, path + "D") + mazePathWithHuddles(arr,r, c, i, j + 1, path + "R")
//     return ways
// }

// let arr = [
//     [1, 0 , 0],
//     [1, 1,  1],
//     [0,  0, 1]    
// ]
// console.log(mazePathWithHuddles(arr, 3, 3, 0, 0, ""))



