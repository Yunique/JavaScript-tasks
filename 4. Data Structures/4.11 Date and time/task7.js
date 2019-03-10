function getSecondsToTomorrow() {
    const now = new Date(), tomorrow = new Date(
        now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return ~~((tomorrow - now) / 1000);
}


console.log(getSecondsToTomorrow());