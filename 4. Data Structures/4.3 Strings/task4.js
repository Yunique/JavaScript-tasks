function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$450.33'));
console.log(extractCurrencyValue('$266'));