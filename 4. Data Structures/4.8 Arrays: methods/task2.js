function camelize(str) {
    let words = (str.split('-')), result = words[0];
    for (let i = 1; i < words.length; i++) {
        result += ((words[i][0].toUpperCase()) + (words[i].slice(1)));
    }
    return result;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));