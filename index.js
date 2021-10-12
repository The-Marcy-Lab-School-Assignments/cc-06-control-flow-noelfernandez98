// //1
// function sumOfThreeAndFive(){
//   let sum = 0
//   for(i=1; i <= 1000; i++){
//   if(i % 3 === 0 || i % 5 === 0){
//       sum += i
//   }
// }
// return sum
// }
// console.log(sumOfThreeAndFive())

function greaterNum(x, y){
  if(x === y){
  return "both integers are equal"
}else if(x > y){
    return x
  }else if(y > x){
    return y
  }else{
  return "null"
}

console.log(greaterNum(3,6))

function oddAndEvenInFifteen(){
  
}

function sortThreeNums(){
  
}




// 2. Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - If both arguments are equal, it will return the string "both integers are equal"
// - If a given argument is not an integer it will return `null`
// ```
// greaterNum(10, 7) //returns 10
// greaterNum(1.14, 1.14) //returns "both integers are equal"
// greaterNum("21", 21) //returns null
```

