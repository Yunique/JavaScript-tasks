"use strict";

const salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

const anotherSalaries = {};

console.log(salariesSum(salaries));
console.log(salariesSum(anotherSalaries));

function salariesSum(salaries) {
    let sum = 0;
    for (let salary in salaries) {
        sum += salaries[salary];
    }
    return sum;
}
