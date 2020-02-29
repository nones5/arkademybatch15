function is_username_valid(username){
    let cond = /^[a-z0-9]{2,}[a-z]+[0-9]$/gm;
    if(username.length >=5 && username.length <=8 && username.match(cond)){
        console.log('true');
    }
    else{
        console.log('false');
    }

}

function is_password_valid(password){
    let cond = /^(?=.*\d)(?=.*[a-z\-])[0-9a-z\-]{7,11}$/;
    if(password.match(cond)){
        console.log('true');
    }
    else{
        console.log('false');
    }
}

is_username_valid('1brah1'); //Username Valid
is_password_valid('1-2brah34'); //Password Valid
is_username_valid('1brah1@_ask'); //Username Invalid
is_password_valid('1@2brah34'); //Password Invalid

