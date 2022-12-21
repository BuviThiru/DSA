function validParanthesis(n,open,close,output){
    if(open==n && close ==n){
        console.log(output);
        return
    }
    if(open<n){ 
    validParanthesis(n,open+1,close,output+"{")}
    if(close <open){
        validParanthesis(n,open,close+1,output+"}")
    }

}
validParanthesis(5,0,0,"")