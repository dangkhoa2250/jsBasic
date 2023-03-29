console.log(`helloworld`)
// let arr = [1, 2, 3, 4, 5, 6 ,7];
let arr = [
    {name: "khoa", age: 24},
    {name: "khoi", age: 21},
    {name: "delta", age: 34},
    {name: "kelvin", age: 24},
    {name: "linda", age: 26},

]
let a = arr.filter((item,index,arr) => {
//   console.log(`>>> check filter:
//     item: ${item}
//     index: ${index}`)
  return item.age >= 24
} 
)

// ham find return element dau tien thoa man dieu kien
let found = arr.find((item, index) => {
    return item.age === 24
})

console.log(a)
console.log(found)