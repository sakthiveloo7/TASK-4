// Sum of all numbers in an array using Arrow function

console.log("Arrow Function")

const sumOfArray = (arrayValues) => {   
    let sum = 0
    for(let i of arrayValues)
    {
        sum += i
    }
    console.log(sum)
}
sumOfArray([80, 34, 42])
