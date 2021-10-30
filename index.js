const inputBill = document.querySelector("#inputBill");
const inputTip = document.querySelector("#inputTip");
const inputCount = document.querySelector("#inputCount");
const btnCheck = document.querySelector(".check");
const tipOutput = document.querySelector(".tipOutput");
const perPersonOutput = document.querySelector(".perPersonOutput");
const boxOutput = document.querySelector(".boxOutput");


btnCheck.addEventListener("click",function checkOutPut(){
    const bill = inputBill.value;
    const tip = inputTip.value;
    const count = inputCount.value;
    if(validate(bill, tip, count))
        calculateTip(bill, tip, count);
    
})

function validate(bill, tip, count)
{
    if(isNaN(bill) || isNaN(tip) || isNaN(count))
    {
        boxOutput.innerText=("Please Enter Valid numerical Inputs in the field.");
        return false;
    }
    else if(bill==="" || tip==="" || count==="")
    {
        boxOutput.innerText=("Please Enter Some values for us to work on.");
        return false;
    }
    else if(count<0 || bill<0 || tip<0)
    {
        boxOutput.innerText=("We believe these values cannot be negative.");
        return false;
    }
    else if(count===0 || bill===0)
    {
        boxOutput.innerText=("You can neither have zero bill nor have zero people to pay the bill.");
        return false;
    }
    else
    {
        return true;
    }
}


function calculateTip(bill, tip, count)
{
        var totalTip = (bill*tip)/100;
    totalTip=totalTip.toFixed(2);
    const tipPerPerson = totalTip/count;
    var perPerson = (bill)/count;
    perPerson=perPerson+tipPerPerson;
    tipOutput.innerText=("Total tip = "+
    totalTip+"\n Tip per person = "+tipPerPerson.toFixed(2));
    perPersonOutput.innerText=("Per person bill = "+perPerson.toFixed(2));
}