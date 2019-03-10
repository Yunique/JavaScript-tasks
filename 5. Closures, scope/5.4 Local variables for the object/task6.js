function makeArmy() {
    const shooters = [];
    for (let i = 0; i < 10; i++) {
        const shooter = function () {
            console.log(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}

const army = makeArmy();
army[0]();
army[5]();
