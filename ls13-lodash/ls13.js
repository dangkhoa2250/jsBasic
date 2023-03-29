let arr = ["khoa", "hotdot", "lion", "cat"]
let arr2 = ["hotdot", "cat", "dog", "elephant", "shard"]

let common = []

for (let i = 0; i < arr.length; i++){
    if (arr2.indexOf(arr[i]) !== -1){
        common.push(arr[i])
    }
console.log(common)
}

// muon su dung lodash phải tải file lodash.js về và import vào thẻ head của html
console.log(_.intersection(arr, arr2))

