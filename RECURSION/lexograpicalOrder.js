function lexographicOrder(start,end){
  if(start>end){ return}

  console.log(start)
 
  for(let i=1;i<=9;i++){
    let newStart = (start*10 )+i
     lexographicOrder(newStart, end)
  }
  return lexographicOrder(start+1)

    
}
console.log(lexographicOrder(1,25))