function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;


}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const previousBalanceTotal = previousTotal + amount;
    totalElement.innerText = previousBalanceTotal;

}

function getCurrentBalance(){
    const totalBalance = document.getElementById("balance-total");
    const BalanceText = totalBalance.innerText;
    const currentBalanceTotal = parseFloat(BalanceText);
    return currentBalanceTotal;
}

function updateTotalBalance(amount, isAdd) {
    const totalBalance = document.getElementById("balance-total");
    const currentBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = currentBalanceTotal + amount;
        totalBalance.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = currentBalanceTotal - amount;
        totalBalance.innerText = newBalanceTotal;
    }

}

// using Functional and create again page

document.getElementById("deposit-button").addEventListener("click", function () {

    // const depositInput = document.getElementById("deposit-input");
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);


    // const depositTotal = document.getElementById("deposit-total");
    // const depositTotalText = depositTotal.innerText;
    // const depositTotalAmount = parseFloat(depositTotalText);
    // const previousBalanceTotal = depositTotalAmount + depositAmount;
    // depositTotal.innerText = previousBalanceTotal;

    // const depositBalance = document.getElementById("balance-total");
    // const depositBalanceText = depositBalance.innerText;
    // const currentBalanceTotal = parseFloat(depositBalanceText);
    // const newBalanceTotal = currentBalanceTotal + depositAmount;
    // depositBalance.innerText = newBalanceTotal;

    depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
        updateTotalField("deposit-total", depositAmount);
        updateTotalBalance(depositAmount, true);
    }

})

// withdraw section 

document.getElementById("withdraw-button").addEventListener("click", function () {
    // const withdrawInput=document.getElementById("withdraw-input");
    // const withdrawInputText=withdrawInput.value;
    // const withdrawInputAmount=parseFloat(withdrawInputText);

    // const withdrawTotal = document.getElementById("withdraw-total");
    // const withdrawTotalText = withdrawTotal.innerText;
    // const withdrawTotalAmount = parseFloat(withdrawTotalText);
    // const newWithdrawTotal = withdrawTotalAmount + withdrawInputAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    // const withdrawBalance = document.getElementById("balance-total");
    // const withdrawBalanceText = withdrawBalance.innerText;
    // const withdrawBalanceAmount = parseFloat(withdrawBalanceText);
    // const newWithdrawBalance = withdrawBalanceAmount - withdrawInputAmount;
    // withdrawBalance.innerText = newWithdrawBalance;

    withdrawInputAmount = getInputValue("withdraw-input");
    const currentBalance=getCurrentBalance();
    if (withdrawInputAmount > 0 && withdrawInputAmount < currentBalance) {
        updateTotalField("withdraw-total", withdrawInputAmount);
        updateTotalBalance(withdrawInputAmount, false);
    }
    if(withdrawTotalAmount > currentBalance){
        console.log("You Can Not Withdraw");
    }


    // withdrawInput.value='';
})