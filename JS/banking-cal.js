function deposit() {
    // brought the input value of deposit input section.
    let depositValue = document.getElementById('Deposit-input');
    // brought the text of total deposit output section.
    let totalDepositOutput = document.getElementById('Total-Deposit');
    // brought the text of total available balance
    let availableBalance = document.getElementById('available-amount');

    // total amount of deposit
    totalDepositOutput.innerText = parseFloat(totalDepositOutput.innerText) + parseFloat(depositValue.value);
    // update the available balance
    availableBalance.innerText = parseFloat(depositValue.value) + parseFloat(availableBalance.innerText);
    // empty the deposit value
    depositValue.value = '';
}

function withdraw() {
    // brought the input value of withdraw input section.
    let withdrawValue = document.getElementById('withdraw-input');
    // brought the text of total withdraw output section.
    let totalWithdrawOutput = document.getElementById('Total-Withdraw');
    // brought the text of total available balance
    let availableBalance = document.getElementById('available-amount');

    // total amount of withdraw
    totalWithdrawOutput.innerText = parseFloat(totalWithdrawOutput.innerText) + parseFloat(withdrawValue.value);
    // update the available balance
    availableBalance.innerText = parseFloat(availableBalance.innerText) - parseFloat(withdrawValue.value);
    // empty the withdraw value
    withdrawValue.value = '';

}