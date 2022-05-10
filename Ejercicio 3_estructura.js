function darFactorial(n){
    if(n < 0){
        return `debe poner un numero natural`;
    }else if(n == 0){
        return 1;
    }else{
        return n*(darFactorial(n-1));
    }

}





module.exports = {
    darFactorial
}

