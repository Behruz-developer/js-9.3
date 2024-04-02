let arr = []
while (true) {
    str = prompt('text')
    let array = str.split(' ')

    if (array[0] == 'add,') {
        array.shift()
        arr.push(`${array}`)
    }else if(array[0] == 'del,') {
        array.shift()
        delete1 = arr.indexOf(`${array}`)
        arr.splice(delete1, 1)
    } else if (str === "stop") {
        break;
    }
}

console.log(arr);

// let asd = prompt('tecc')
// let arr = ['das', 'sa', 've']

// delete1 = arr.indexOf(`${asd}`)
// arr.splice(delete1, 1)
// console.log(arr);