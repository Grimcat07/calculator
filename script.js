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

let operand1=''; let operand2='';let operator='';
function operate(operand1,operator,operand2){
    let result;
    switch(operator)
    {
        case '+':
            return add(operand1,operand2);
            break;
        case '-':
            return sub(operand1,operand2);
            break;
        case '*':
            return mul(operand1,operand2);
            break;
        case '/':
            return div(operand1,operand2);
            break;
    }
}
let display=document.querySelector(".result");
let subdisp=document.querySelector(".sub-display");
const buttons=document.querySelectorAll("button")
const button=Array.from(buttons);
let input ='';let result;
button.forEach(buton=>{
    buton.addEventListener("click",()=>{
        
        if(buton.innerText==="AC"){
            input='';
            operand1='';
            operand2='';
            operator=''
            display.textContent='';
            subdisp.textContent='';
        }
        else if(buton.innerText==='='){
            operand2=input;
            if(operand1!='' && operand2!='' && operator!='')
            {
               result=operate(parseFloat(operand1),operator,parseFloat(operand2));
               operand1=result;
               operand2='';
               operator='';
               display.textContent=result;
               subdisp.textContent=`${operand1} ${operator} ${operand2}`;

        }}
        else if(['+','-','*','/'].includes(buton.innerText)){
            
            if(operand1==''){
                operand1=input;
            }
            else
            {
                operand2=input;
            }
            input='';
            operator=buton.innerText;
            display.textContent=operand1+''+operator;
            

        }
        else{
            input=input+buton.innerText;
            display.textContent=input;
            //subdisp.textContent = `${operand1} ${operator} ${input}`;
        }
    })
});
