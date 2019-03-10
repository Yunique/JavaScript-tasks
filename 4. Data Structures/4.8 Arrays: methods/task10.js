function aClean(arr) {
    let wordPurelized = [], temporary = [], result = [];
    for (let i = 0; i < arr.length; i++) {
        wordPurelized.push(arr[i].toLowerCase().split('').sort().join(''));

    }
    for (let i = 0; i < arr.length; i++) {
        if (temporary.indexOf(wordPurelized[i]) < 0) {
            temporary.push(wordPurelized[i]);
            result.push(arr[i]);
        }
    }

    return result;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log(aClean(arr));