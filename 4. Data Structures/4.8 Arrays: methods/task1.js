const obj = {
    className: 'open menu'
};

function addClass(obj, cls) {
    if (obj.className.split(' ').indexOf(cls) >= 0) {
        return obj.className;
    } else {
        if (!obj.className) {
            return obj.className += cls;
        } else
            return obj.className += ' ' + cls;
    }
}

console.log(addClass(obj, 'new')); // obj.className='open menu new'
console.log(addClass(obj, 'open')); // без изменений (класс уже существует)
console.log(addClass(obj, 'me')); // obj.className='open menu new me'
console.log(obj.className); // "open menu new me"
