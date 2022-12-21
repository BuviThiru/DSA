function PalinArray(arr,n){
        function isPalindrome(num){
            let str = ""+num
            let start = 0, end = str.length-1
            while(start<=end){
                if(str[start] !=str[end])
                return false
                else{
                    start++
                    end--
                }
            }
            return true
        }
        
 for(let i=0;i<arr.length;i++){
   if( ! isPalindrome(arr[i])) return 0
    
 }
 return 1
    }

console.log(PalinArray([111,122,555]))