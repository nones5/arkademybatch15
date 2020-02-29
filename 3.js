function Sequence(n){
    if(n <= 0){
        console.log("Parameter harus bilangan positif")
    }
    else{
        let foo = [];
        foo.push(n);
        for(let i = 0; i < 9; i++){
            let num = foo[i];
        let a = num % 2;
        if(a == 0){
            let b = num / 2;
            foo.push(b);
        }
        if(a != 0){
            let c = 3*num+1;
            foo.push(c);
        }
        }
        console.log(foo);
    }
}
    Sequence(13);
    Sequence(3);
    Sequence(-9);
    