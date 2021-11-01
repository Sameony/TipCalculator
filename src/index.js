//Reference of html elements to the script
const inputBill = document.querySelector("#inputBill");
const inputTip = document.querySelector("#inputTip");
const inputCount = document.querySelector("#inputCount");
const btnCalculate = document.querySelector(".calculate");
const boxOutput = document.querySelector(".boxOutput");
const btnPlusTip = document.querySelector(".plusTip");
const btnMinusTip = document.querySelector(".minusTip");
const btnPlusCount = document.querySelector(".plusCount");
const btnMinusCount = document.querySelector(".minusCount");

//Buttons to add/subtract the value of tip and count of head
btnMinusCount.addEventListener("click", function minusMyCount() {
    let x = parseInt(inputCount.value);
    if (inputCount.value != 0)
        inputCount.value = (x - 1);
})
btnPlusCount.addEventListener("click", function plusMyCount() {
    let x = parseInt(inputCount.value);
    inputCount.value = (x + 1);
})
btnMinusTip.addEventListener("click", function minusMyTip() {

    let x = parseInt(inputTip.value);
    if (inputTip.value != 0)
        inputTip.value = (x - 5);
})
btnPlusTip.addEventListener("click", function plusMyTip() {

    let x = parseInt(inputTip.value);
    if (inputTip.value >= 45)
        inputTip.value = 50;
    else {
        inputTip.value = x + 5;
    }
})


//Driver button that calculates the tip after validating input
btnCalculate.addEventListener("click", function calculateOutPut() {
    var bill = parseInt(inputBill.value);
    var tip = parseInt(inputTip.value);
    var count = parseInt(inputCount.value);
    if (validate(bill, tip, count))
        calculateTip(bill, tip, count);

})
//validate input
inputTip.addEventListener("change", function limitMyTip() {
    if (inputTip.value >= 50)
        inputTip.value = 50;
})

function validate(bill, tip, count) {
    if (isNaN(bill) || isNaN(tip) || isNaN(count)) { //input should be a number
        boxOutput.innerText = ("Please Enter Valid numerical Inputs in all input fields.");
        return false;
    } else if (count < 0 || bill < 0 || tip < 0) { //non negative number
        boxOutput.innerText = ("We believe these values cannot be negative.");
        return false;
    } else if (count === 0 || bill === 0) { //bill value and number of people cannot be zero
        boxOutput.innerText = ("You can neither have zero bill nor have zero people to pay the bill.");
        return false;
    } else if(count%1!=0){
        boxOutput.innerText=("Please enter whole number for count of people.")
        return false;
    } else {
        return true;
    }
}

//Calculate tip after validation
function calculateTip(bill, tip, count) {
    var totalTip = (bill * tip) / 100;
    var totalBill = bill + totalTip;
    totalBill = totalBill;
    totalTip = totalTip.toFixed(2);
    const tipPerPerson = totalTip / count;
    var perPerson = (bill) / count;
    perPerson = perPerson + tipPerPerson;
    boxOutput.innerText = ("Total bill = " + totalBill +
        "\nTotal tip = " + totalTip +
        "\n Tip per person = " + tipPerPerson.toFixed(2) +
        "\nPer person bill = " + perPerson.toFixed(2));
}