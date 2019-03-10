var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


function printList(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}

// printList(list);

function printListR(list) {
    if (list) {
        console.log(list.value);
        printList(list.next)
    }
}

// printListR(list);


function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next)
    }
    console.log(list.value);
}

// printReverseList(list);

function printReverseListWithoutR() {
   let arr = [];
    while (list) {
        arr.push(list.value);
        list = list.next;
    }
    console.log(arr.reverse().join(' '))
}

printReverseListWithoutR();