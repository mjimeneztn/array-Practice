const addSum = (max, ...array)=> {
   let sum = 0
   for (const num of array){
       sum += num
   }

if (sum > max) {
  return 0
}
 return sum
}


console.log(addSum(100,4,6,8,5))

const result1 = addSum(3,6,18,100,500)
console.log(result1)


const getString=(...stringArray) =>
 stringArray.join(" ")


const statement1= getString("my","name","is","michelle")

console.log(statement1)