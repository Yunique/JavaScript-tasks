function Calculator() {
    const methods = {
        '+': function (a, b) {
            return a + b
        },
        '-': function (a, b) {
            return a - b
        }
    };
    this.calculate = function (str) {
        const operation = str.split(' ');
        const a = +operation[0],
            sign = operation[1],
            b = +operation[2];

        if (!methods[sign] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[sign](a, b)
    };

    this.addMethod = function (name, func) {
        methods[name] = func;
    }
}


const calc = new Calculator();
console.log(calc.calculate('3 + 7'));
console.log(calc.calculate('3 - 7'));


const powerCalc = new Calculator;
powerCalc.addMethod("*", function (a, b) {
    return a * b;
});
powerCalc.addMethod("/", function (a, b) {
    return a / b;
});
powerCalc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});

console.log(powerCalc.calculate('2 * 3'));
console.log(powerCalc.calculate("2 ** 3"));
console.log(powerCalc.calculate('10 / 2'));
console.log(powerCalc.calculate('10 t 2'));