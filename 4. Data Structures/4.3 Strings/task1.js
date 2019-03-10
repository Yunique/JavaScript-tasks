function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


console.log(ucFirst("вася") == "Вася");
console.log(ucFirst("") == "");  // нет ошибок при пустой строке
console.log(ucFirst('hello'));