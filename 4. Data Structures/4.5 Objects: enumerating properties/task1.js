function isEmpty(obj) {
    for (let prop in obj) {
            return false
    }
    return true;
}


var schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

console.log( isEmpty(schedule) ); // false