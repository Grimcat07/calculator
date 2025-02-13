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
let input ='';let result;let decimal=false; let equal=0;
button.forEach(buton=>{
    buton.addEventListener("click",()=>{
        
        if(buton.innerText==="AC"){
            input='';
            operand1='';
            operand2='';
            operator=''; 
            display.textContent='';
            subdisp.textContent='';
			decimal=false; 
        }
        else if(buton.innerText==='='){
            if(operand1!='' && operator!=''&& input!='')
            {
               operand2=input; 
			   result=operate(parseFloat(operand1),operator,parseFloat(operand2));
			   subdisp.textContent=`${operand1} ${operator} ${operand2}`;
			   operand1=result; 
			   input=''; 
               operand2='';
               operator='';
			   decimal=false; 
               display.textContent=result;
			   equal++; 
            }    
		}
		
        else if(['+','-','*','/'].includes(buton.innerText)){
            if(operand1 !=''&& input !=''){
				operand2=input; 
				result=operate(parseFloat(operand1),operator,parseFloat(operand2));
				subdisp.textContent=`${operand1} ${operator} ${operand2}`;
				operand1=result; 
				input=''; 
				operator=''; 
				operand2=''; 
				decimal=false; 
				display.textContent=result; 
				
			}
            if(operand1===''){
                operand1=input;
				
            }
            equal=0;
            input='';
            operator=buton.innerText;
            display.textContent=operand1+''+operator;
            

        }
		else if(buton.innerText=='.'){
			if(decimal==false){
				if(operand1==''&&input==''){
					input='0.'; 
					display.textContent=input; 
					decimal=true
				}
			    else
				{
		        	input=input+buton.innerText; 
			        display.textContent=input; 
			        decimal=true;
				} 
			} 
			else
			{
				input='0.'; 
				display.textContent=input;
				decimal=true; 
			}
		}
        else{
			if(equal===1){
				operand1=''; 
				display.textContent=input; 
				equal=0;
			}
            input=input+buton.innerText;
            display.textContent=input;
        }
    })
});
