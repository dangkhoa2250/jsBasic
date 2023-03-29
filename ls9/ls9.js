// callback function
let sum = (a, b, callback) => {
    let tong = a + b;
    // set time out cho cau lenh
    setTimeout(() => {
        callback(tong);
    }, 5000);
    let i = 0;
    // lap thoi gian lien tuc
    let timer = setInterval(() => {
        callback(tong--)
        i++;
        if (i === 5){
            clearInterval(timer)
        }
    }, 1000);
}

let print = (sum) => {
    console.log(`sum a and b is ${sum}`)
}

sum(3, 4, print)