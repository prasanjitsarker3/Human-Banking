document.getElementById("deposit-button").addEventListener('click', function() {
    const depositInput = document.getElementById("deposit-input");
    const newDepositText=depositInput.value;
    const newDepositAmount=parseFloat(newDepositText);
    const depositTotal=document.getElementById("deposit-total");
    const previousDepositText= depositTotal.innerText;
    const previousDepositAmount=parseFloat(previousDepositText)
    const newDepositTotal= previousDepositAmount + newDepositAmount;
    depositTotal.innerText=newDepositTotal;

    // update account Balance
    const balanceTotal=document.getElementById("balance-total");
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal= parseFloat(balanceTotalText);
    const newBalanceTotal=previousBalanceTotal + newDepositAmount;
     balanceTotal.innerText=newBalanceTotal;
    depositInput.value = '';
})

// withdraw section about

document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount =parseFloat( withdrawAmountText);
    // set withdraw Total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText= withdrawTotal.innerText;
    const previousWithdrawAmount= parseFloat( previousWithdrawText);
    const newWithdrawTotal= previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;
    

    // update balance

    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText= balanceTotal.innerText;
    const previousBalanceTotal= parseFloat( previousBalanceText);
    const newBalanceTotal=previousBalanceTotal- newWithdrawAmount;
    balanceTotal.innerText=newBalanceTotal;
    
    withdrawInput.value='';
})