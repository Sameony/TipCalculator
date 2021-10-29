const inputBill = document.querySelector("#inputBill");
const inputTip = document.querySelector("#inputTip");
const inputCount = document.querySelector("#inputCount");
const btnCheck = document.querySelector(".check");
const tipOutput = document.querySelector(".tipOutput");
const perPersonOutput = document.querySelector(".perPersonOutput");


btnCheck.addEventListener("click",function checkOutPut(){
    var totalTip = (inputBill.value*inputTip.value)/100;
    totalTip=totalTip.toFixed(2);
    var perPerson = (inputBill.value)/inputCount.value;
    tipOutput.innerText=("Total tip = "+totalTip);
    perPersonOutput.innerText=("Per person bill = "+perPerson);
})
