/*
var obj1 = {'n1':10, 'n2':11}
var obj2 = {'n1':10, 'n2':11}
obj1===obj2 is false
but we need a function to get output is true below

function equals(obj1, obj2){
    .
    .
    .
    return true
}
equals(obj1, obj2)
*/

function equals(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }

    const keys = Object.keys(obj1)
    console.log(keys, 'keys');
    let flag = true
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (obj1[key] !== obj2[key]) {
            flag = false;
            break;
        }
    }
    return flag;
}