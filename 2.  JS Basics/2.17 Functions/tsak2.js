function checkAge(age){
    return (age > 18) ? true : confirm('Parents allowed?');
}

function checkAge(age) {
    return age > 18 || confirm('Parents allowed?');
}