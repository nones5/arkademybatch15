function Sequence(n){
    if(n <= 0){
        console.log("Parameter harus bilangan positif")
    }
    else{
        let foo = [n];
        while(n > 1){
            n = n%2 > 0 ? n*3+1 : n/2;
            foo.push(n);
        }
            console.log("array :",foo);
            console.log("count :", foo.length);
    }
}

Sequence(13);
Sequence(3);
Sequence(-9);
    