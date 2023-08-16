document.getElementById('Deposit-btn').addEventListener('click', function () {
    // deposite code...
    const depositFieldString = document.getElementById('deposit-field');
    const depositField = parseFloat(depositFieldString.value);
    const depositAmountString = document.getElementById('Deposit-amount');
    const depositAmount = parseFloat(depositAmountString.innerText);
    depositFieldString.value = '';
    if(isNaN(depositField) || depositField<0){
        alert('provide a valid number');
        return;
    }
    depositAmountString.innerText = depositField + depositAmount;
    // balance code...
    const balanceString = document.getElementById('balance-amount');
    const balance = parseFloat(balanceString.innerText);
    balanceString.innerText = depositField + balance;
    
});

// withdraw button code...
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //withdraw code...
    const withdrawFieldString = document.getElementById('withdraw-field');
    const withdrawField = parseFloat(withdrawFieldString.value);
    withdrawFieldString.value = '';
    if(isNaN(withdrawField) || withdrawField<0){
        alert('provide a valid number');
        return;
    }

    const withdrawAmountString = document.getElementById('withdraw-amount');
    const withdrawAmount = parseFloat(withdrawAmountString.innerText);
    withdrawAmountString.innerText = withdrawField + withdrawAmount;

    //balance code....
    const balanceString = document.getElementById('balance-amount');
    const balance = parseFloat(balanceString.innerText);
    if (withdrawField > balance) {
        alert('You have less balance than you want to withdraw');
        withdrawAmountString.innerText = withdrawAmount;
    } else {
        balanceString.innerText = balance - withdrawField;
    }


})