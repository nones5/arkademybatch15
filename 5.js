function triangle(size){
    for(let i = 0; i < size; i++){
        for(let j = size - 1; j >= i; j--){
            document.write("&nbsp;&nbsp;");
        }
        for(let k = 0; k <= i; k++){
            document.write("*");
        }
        document.write('<br/>');
    }
}

triangle(5);