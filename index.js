const inputBill = document.querySelector("#inputBill");
const inputTip = document.querySelector("#inputTip");
const inputCount = document.querySelector("#inputCount");
const btnCheck = document.querySelector(".check");
const boxOutput = document.querySelector(".boxOutput");


btnCheck.addEventListener("click", function checkOutPut() {
    const bill =parseInt(inputBill.value);
    const tip = parseInt(inputTip.value);
    const count= parseInt(inputCount.value);
    console.log(bill,tip,count);
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