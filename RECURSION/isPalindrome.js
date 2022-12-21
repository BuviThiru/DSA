function isPalindrome(str,s,e){
    if(s>=e) return true

    if(str[s] != str[e]) return false
    return isPalindrome(str,s+1,e-1)

}

let str = "abcdrcba"
let e =str.length-1
console.log(isPalindrome(str,0,e))