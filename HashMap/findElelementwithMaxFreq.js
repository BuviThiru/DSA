function maximumFrequencyElement(string){
    let map = new Map()
    let maxFreq = 0;
    let maxFreqElement = ""
    for(char of string){
        if(map[char]){
            if(map[char]>maxFreq){
                maxFreq = map[char]
                maxFreqElement = char
            }
        }else {
            map[char]=1
        }
    }
    console.log(map)
    return maxFreqElement;
}

console.log(maximumFrequencyElement("aaaaaaaaaaaaacdef"))