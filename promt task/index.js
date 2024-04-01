//1


// function test(n) {
//     let arr = [1, 1]
//     for (let i = 0; i < n; i++) {
//         arr.push(arr[i] + arr[i + 1])
//     }
//     console.log(arr);
//     console.log(arr[n]);

// }
// test(5)

//1ci nin---2ci yolu
let arr = [1, 1]
let n = prompt('eded daxil et')
for (let i = 0; i < n; i++) {
    arr.push(arr[i] + arr[i + 1])
}
console.log(arr);
alert(arr[n])



//3-cu
let a=prompt('boleni daxil edin')
for (let i = 1; i<=1000; i++) {
    if (i % a==0) {
        console.log(i);
    }
}

