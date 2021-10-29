const inputBill = document.querySelector("#inputBill");
const inputTip = document.querySelector("#inputTip");
const inputCount = document.querySelector("#inputCount");
const btnCheck = document.querySelector(".check");
const tipOutput = document.querySelector(".tipOutput");
const perPersonOutput = document.querySelector(".perPersonOutput");


btnCheck.addEventListener("click",function checkOutPut(){
    var totalTip = (inputBill.value*inputTip.value)/100;
    totalTip=totalTip.toFixed(2);
    const tipPerPerson = totalTip/inputCount.value;
    var perPerson = (inputBill.value)/inputCount.value;
    perPerson=perPerson+tipPerPerson;
    tipOutput.innerText=("Total tip = "+totalTip+"\n Tip per person = "+tipPerPerson.toFixed(2));
    perPersonOutput.innerText=("Per person bill = "+perPerson.toFixed(2));
})
