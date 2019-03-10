var vasya = {name: "Вася", age: 23};
var masha = {name: "Маша", age: 18};
var vovochka = {name: "Вовочка", age: 6};

var people = [vasya, masha, vovochka];

function arrSort(a, b) {
    return a.age - b.age
}

people.sort(arrSort);

console.log(people[0].age); // 6

for (let i=0; i<people.length; i++){
    console.log(people[i].name)
}
