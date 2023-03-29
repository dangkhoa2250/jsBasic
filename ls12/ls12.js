let arr = [3, 20000, 1, 4, 5];
let initialValue = 0
let reducer = arr.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue
}, initialValue)

//item1 - item2 thi sort tu be den lon
//item2 - item1 thi sort tu lon den be
arr.sort((item1, item2) => {
    console.log(arr)
    return item1 - item2
})
console.log(arr)
