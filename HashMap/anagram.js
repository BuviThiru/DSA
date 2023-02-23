function groupAnagrams(strArray){ //sorted string of all the anograms will be equal
    let map = new Map()
    for(let i=0;i<strArray.length;i++){
        let sortedString = strArray[i].split("").sort().join(""); //sort the given string to compare
        // console.log(sortedString)
        if(map[sortedString]){
            map[sortedString].push(strArray[i])
        }else{
            map[sortedString]= [strArray[i]]
        }
    }

  for(str in map){
    console.log(map[str])
  }
}
let strArray = ["bat","atb","atm","mat","cry","silent", "listen"]
groupAnagrams(strArray)
