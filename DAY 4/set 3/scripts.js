function sum(a,b,fun){       //higher order function
const ans=a+b;
fun(ans);
}  

function print(x){
    console.log('   ****',x,'***   ');
}

sum(3,4,print);
