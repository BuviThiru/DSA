// 1) Find the first element having a maximum frequency in a string “unacademy”
// 2) Write a program to rearrange the elements such like positive numbers shift to the end and negative numbers to
// the right
function maximumFrequency(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) { obj[str[i]] = 1 }
        else { obj[str[i]]++ }
    }

    let max = 0
    let keyValue
    for (const key in obj) {
        if (obj[key] > max) {
            max = obj[key]
            keyValue = key
        }
    }
    return keyValue
}
console.log(maximumFrequency("unacademy"))

function positiveNegative(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        if (arr[start] < 0) {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            end--
        }
        else {
            start++
        }
    }
    return arr

}
console.log(positiveNegative([1, -4, 3, -5, 2, -1, 7, 8]))