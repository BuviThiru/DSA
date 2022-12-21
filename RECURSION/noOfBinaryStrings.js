function numOfBinaryStrings(num){
  if(num==1) return  2
  if(num==0) return 1
  return numOfBinaryStrings(num-1) + numOfBinaryStrings(num-2)//as patern goes like fibonacci
}
console.log(numOfBinaryStrings(3))