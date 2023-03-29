console.log(`hello world`)
let arr = [1, 2, 3, 4, 5, 6, 7, 8 ,9]

// su dung map thay vi for loop cho array

// for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * arr[i];
// }

let maparr = arr.map((item, index) => {
    item = item * item 
    return item
})
console.log(arr)
console.log(maparr)