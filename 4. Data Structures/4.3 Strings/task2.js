function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes('viagra') || str.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam("innocent rabbit") == false);