function add(a,b) {
    return a+b;
    
}
function sub(a,b) {
    return a-b;
}
function mul(a,b) {
    return a*b;
}
function div(a,b) {
    return b==0 ? "ERROR" : a/b;
}

let operand1=0; let operand2=0;let operator='';
function operate(operand1,operator,operand2){
    let result;
    switch(operator)
    {
        case '+':
            result=add(operand1,operand2);
            break;
        case '-':
            result=sub(operand1,operand2);
            break;
        case '*':
            result=mul(operand1,operand2);
            break;
        case '/':
            result=div(operand1,operand2);
            break;
    }
    console.log(result);
}
