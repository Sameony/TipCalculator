const inputBill = document.querySelector("#inputBill");
const inputTip = document.querySelector("#inputTip");
const inputCount = document.querySelector("#inputCount");
const btnCheck = document.querySelector(".check");

btnCheck.addEventListener("click",function checkOutPut(){
    console.log(inputBill.value + inputTip.value + inputCount.value);
})
