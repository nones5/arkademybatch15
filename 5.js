'use strict';

function triangle(size) {
    let arr = [''];
    for (let i = 0; i < size; i++) {
        arr[i] = '';
        for (let j = 0; j < i + 1; j++) {
            arr[i] += "*";
        }
        arr[i] = arr[i].split('').join(' ');
        let step = size + size - 1 - arr[i].length;
        for (let k = 0; k < step; k++) {
            arr[i] = ' ' + arr[i];
        }
    }
    return arr.join('\n');
}

console.log(triangle(5));
