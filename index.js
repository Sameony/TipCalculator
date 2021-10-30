const inputBill = document.querySelector("#inputBill");
const inputTip = document.querySelector("#inputTip");
const inputCount = document.querySelector("#inputCount");
const btnCheck = document.querySelector(".check");
const boxOutput = document.querySelector(".boxOutput");
const btnPlusTip = document.querySelector(".plusTip");
const btnMinusTip = document.querySelector(".minusTip");
const btnPlusCount = document.querySelector(".plusCount");
const btnMinusCount = document.querySelector(".minusCount");


btnMinusCount.addEventListener("click", function minusMyCount()
{
    let x = parseInt(inputCount.value);
    inputCount.value=(x - 1);
})
btnPlusCount.addEventListener("click", function plusMyCount()
{
    let x = parseInt(inputCount.value);
    inputCount.value=(x + 1);
})
btnMinusTip.addEventListener("click", function minusMyCount()
{
    
    let x = parseInt(inputTip.value);
    inputTip.value=(x - 5);
})
btnPlusTip.addEventListener("click", function minusMyCount()
{
    
    let x = parseInt(inputTip.value);
    inputTip.value=(x + 5);
})
btnCheck.addEventListener("click", function checkOutPut() {
    var bill =parseInt(inputBill.value);
    var tip = parseInt(inputTip.value);
    var count= parseInt(inputCount.value);
    if (validate(bill, tip, count))
        calculateTip(bill, tip, count);

})

function validate(bill, tip, count) {
    if (isNaN(bill) || isNaN(tip) || isNaN(count)) {
        boxOutput.innerText = ("Please Enter Valid numerical Inputs in all input fields.");
        return false;
    }
     else if (count < 0 || bill < 0 || tip < 0) {
        boxOutput.innerText = ("We believe these values cannot be negative.");
        return false;
    } else if (count === 0 || bill === 0) {
        boxOutput.innerText = ("You can neither have zero bill nor have zero people to pay the bill.");
        return false;
    } else {
        return true;
    }
}


function calculateTip(bill, tip, count) {
    var totalTip = (bill * tip) / 100;
    var totalBill = bill+totalTip;
    totalBill=totalBill;
    totalTip = totalTip.toFixed(2);
    const tipPerPerson = totalTip / count;
    var perPerson = (bill) / count;
    perPerson = perPerson + tipPerPerson;
    boxOutput.innerText = ("Total bill = "+totalBill
        + "\nTotal tip = " + totalTip 
        + "\n Tip per person = " + tipPerPerson.toFixed(2) 
        + "\nPer person bill = " + perPerson.toFixed(2));
}