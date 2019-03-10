var strings = ["укришна", "укришна", "ухаре", "ухаре",
    "ухаре", "ухаре", "укришна", "укришна", "8-()"
];
// function unique(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (result.indexOf(arr[i])<0){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

function unique(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    return Object.keys(obj)
}


console.log(unique(strings)); // кришна, харе, 8-()