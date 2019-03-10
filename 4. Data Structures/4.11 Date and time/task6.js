function getSecondsToday() {
    const now = new Date,
        todayBegin = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return ~~((now - todayBegin) / 1000)
}

console.log(getSecondsToday());
