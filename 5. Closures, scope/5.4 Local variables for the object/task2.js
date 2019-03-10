function makeBuffer() {
    let buffer = '';
    return function (value) {
        if (value !== undefined) {
            buffer += value;
        }
        return buffer;
    }
}

// function makeBuffer() {
//     makeBuffer.buffer = '';
//     return function (value) {
//         return makeBuffer.buffer += value;
//     }
//
// }

const buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log(buffer()); // Замыкания Использовать Нужно!


const buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);
console.log(buffer2());