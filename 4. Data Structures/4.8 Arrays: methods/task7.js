let arr = [1, 2, 3, 4, 5];

function rand() {
    return Math.random() - Math.random()
}

arr.sort(rand);
console.log(arr);