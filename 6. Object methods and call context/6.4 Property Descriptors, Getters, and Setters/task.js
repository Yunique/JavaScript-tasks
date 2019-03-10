function user(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
        firstName: {
            get: function () {
                return fullName.split(' ')[0]
            },
            set: function (newFirstName) {
                fullName = newFirstName + ' ' + this.lastName;
            }

        },

        lastName: {
            get: function () {
                return fullName.split(' ')[1]
            },
            set: function (value) {
                fullName = this.firstName + ' ' + value
            }
        }
    });
}


const vasya = new user("Vasiliy Popkin");
console.log(vasya.firstName);
console.log(vasya.lastName);
vasya.lastName = 'Sidorov';

console.log(vasya.fullName);