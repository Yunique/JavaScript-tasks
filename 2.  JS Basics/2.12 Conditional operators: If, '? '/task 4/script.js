login = prompt('Enter login', "");
if (login === 'admin') {
    password = prompt('Enter password', "");
    if (password === 'pass') {
        alert('Welcome!');
    } else if (password === null) {
        alert('Entry cancelled');
    } else {
        alert("Incorrect password")
    }
} else if (login === null) {
    alert('Entry cancelled');
} else {
    alert("I don`t know you!")
}