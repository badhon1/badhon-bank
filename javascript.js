//login button handler
const loginBtn = document.getElementById('login-btn').addEventListener('click',function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display ='none';
    let tansactionArea = document.getElementById('tansaction-area');
    tansactionArea.style.display = 'block';
})
//deposit button handler
  const depositBtn = document.getElementById('depositaddBtn');
    depositBtn.addEventListener('click',function(){
        const depositText = document.getElementById('inputDepositAmount').value;
        const depositNum = parseFloat(depositText);

        udateSpanText("depositAmount",depositNum);
        udateSpanText("balanceAmount",depositNum);
        
        document.getElementById('inputDepositAmount').value = "";
})
function udateSpanText(id, depositNum) {
        const courrnt = document.getElementById(id).innerText;
        const Num = parseFloat(courrnt);
        const total = depositNum + Num;
        document.getElementById(id).innerText = total;
}
//withdrow Button handler
const withdrowBtn = document.getElementById('withdrowAddBtn');
    withdrowBtn.addEventListener('click',function(){
        const withdrowInputText = document.getElementById('inputWithdrowAmount').value;
        const withdrowInputNum = parseFloat(withdrowInputText);

       const withdrowText = document.getElementById('withdrowAmount').innerText;
       const withdrowNum = parseFloat(withdrowText);
       const result = withdrowInputNum + withdrowNum;

       document.getElementById('withdrowAmount').innerText = result;
       document.getElementById('inputWithdrowAmount').value = "";
        
       const totalBalanceText = document.getElementById('balanceAmount').innerText;
       const totalBalanceNum = parseFloat(totalBalanceText);
       const resultnum = totalBalanceNum - withdrowInputNum;
       document.getElementById('balanceAmount').innerText = resultnum;

    })