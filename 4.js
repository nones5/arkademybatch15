let isPrime = (n) => {
    if(n === 2){
        return true;
    }
    if(!Number.isInteger(n) || n<2 || !(n%2)){
        return false;
    }
    for(let i = 3; i<= n-1; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

function randomize(num){
    let arr = [];
    let newPos,
        temp;

    for(let i=0; i<30; i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
   
    for(let j = arr.length - 1; j > 0; j--){
        newPos = Math.floor(Math.random() * (j+1));
        temp = arr[j];
        arr[j] = arr[newPos];
        arr[newPos] = temp;
    }
    arr.length = num;
    console.log(arr);
}
randomize(5);
