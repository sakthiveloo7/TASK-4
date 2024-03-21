
//Anonymous Function

const arr = function (array){
    let sum = 0;
    for(let i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
  console.log(arr(array=[6,2,9,3]));

  //IIFE function

  const arrfun = (function (array1){
 let sum = 0;
    for(let i = 0 ; i< array1.length ; i++){
       sum = sum + array1[i];
     }
     return sum;
  })([2,5,6,9,8])
  console.log(arrfun);
  