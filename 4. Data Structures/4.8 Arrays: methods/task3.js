var obj = {
    className: 'open menu'
    // className: 'my menu menu'
};

function removeClass(obj, cls) {
    let arr = obj.className.split(' ');
    while (arr.indexOf(cls) >= 0) {
        arr.splice(arr.indexOf(cls), 1)
    }
    obj.className = arr.join(' ');
}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
// removeClass(obj, 'menu');

console.log(obj.className);