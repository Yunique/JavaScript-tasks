"use strict";

var salaries = {
        "Вася": 100,
        "Петя": 300,
        "Даша": 250
    },
    salaries2 = {};

function salariesHigherOwner(salaries) {
    let maxName = '', max = 0;

    for (let name in salaries) {
        if (max < salaries[name]) {
            max = salaries[name];
            maxName = name;
        }
    }

    return maxName || 'No employee!'
}

console.log(salariesHigherOwner(salaries));
console.log(salariesHigherOwner(salaries2));