const inputBill = document.querySelector("#inputBill");
const inputTip = document.querySelector("#inputTip");
const inputCount = document.querySelector("#inputCount");
const btnCheck = document.querySelector(".check");
const tipOutput = document.querySelector(".tipOutput");
const perPersonOutput = document.querySelector(".perPersonOutput");
const billError = document.querySelector(".billError");
const tipError = document.querySelector(".tipError");
const countError = document.querySelector(".countError");


function validate(input) {
    if(isNaN(input))
        return ("Please Enter a valid numerical value.");
    else if(input<0)
        return ("This field cannot contain negative value.");
    else if(input==="")
        return ("Do not leave this field empty.");    
    
}

inputBill.addEventListener("change",()=>{
    let x = validate(inputBill.value);
    if(x != undefined)
        billError.innerText=(x);
    else
        billError.innerText="";
})
inputCount.addEventListener("change",()=>{
    let x = validate(inputCount.value);
    if(x != undefined)
        countError.innerText=(x);
    else
        countError.innerText="";
})
inputTip.addEventListener("change",()=>{
    let x = validate(inputTip.value);
    if(x != undefined)
        tipError.innerText=(x);
    else
        tipError.innerText="";
})
btnCheck.addEventListener("click",function checkOutPut(){
    var totalTip = (inputBill.value*inputTip.value)/100;
    totalTip=totalTip.toFixed(2);
    const tipPerPerson = totalTip/inputCount.value;
    var perPerson = (inputBill.value)/inputCount.value;
    perPerson=perPerson+tipPerPerson;
    tipOutput.innerText=("Total tip = "+totalTip+"\n Tip per person = "+tipPerPerson.toFixed(2));
    perPersonOutput.innerText=("Per person bill = "+perPerson.toFixed(2));
})
