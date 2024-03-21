// Return all the palindromes in an array using Arrow function

console.log("Arrow Function")
let findAllPalindromes = (arrValues) =>{
    for(let val of arrValues)
    {
        if(val === val.split('').reverse().join(''))
        {
            console.log(val,"is Palinrome")
        }
        else
        {
            console.log(val,"is not Palinrome")
        }   
    }
}

let inputArray = ["racecar", "hello", "level", "145789", "no", "radar"];
findAllPalindromes(inputArray)