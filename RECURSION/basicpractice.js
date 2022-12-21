// let a;
// a=5
// console.log(a);

// var b;
// b=5
// console.log(b)//var and let can be declared first and can be initialised later..But const cant be

// const c; //missing initialization error
// c=5;
// console.log(c)
 

// ____________________________________________________________

// console.log(d) //reference error
// let d = 6


// console.log(e) //error is undefined because of hoisting
// var e =6


//___________________________________________________________________
//PASSBY VALUE PASSBY REFERENCE

// let a = 5;
// let b = a;
// b = 8;//any change in b does not affect a..Passed by value
// console.log(a,b)


// let a = [1,2,3] //here a denotes the memorylocation
// let b = a //a's memory location is assigned to b
// b.push(4); //so any change in b reflects in a also...passed by reference
// console.log(a,b)


// let a = [1,2,3]
// let b = a
// b = ["a","b","c"] //here b overrides its value..so new memory location is created
// console.log(a,b) //output [ 1, 2, 3 ] [ 'a', 'b', 'c' ]
// b.push(4)
// console.log(a,b) //output [ 1, 2, 3 ] [ 'a', 'b', 'c', 4 ] //any change in b does not affect a as the value is overrided and d has different memory location


