function makeBuffer() {
    let text = '';

    function buffer (value) {
        if (value !== undefined) {
            text += value;
        }
        return text;
    }

    buffer.clear = function () {
        return text= ''
    };

    return buffer;
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
console.log(buffer()); // Тест тебя не съест

buffer.clear();

console.log(buffer.clear()); // ""