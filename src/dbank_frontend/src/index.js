import {dbank_backend} from '../../declarations/dbank_backend';

window.addEventListener("load", async function(){
  // console.log("finished loading");
  const currentAmount = await  dbank_backend.checkBalance();
  this.document.getElementById("value").innerText = currentAmount;
})

document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault();
  // console.log("submitted");
  const btn = event.target.querySelector("#submit-btn");  
  const inputAmount = parseFloat(document.getElementById("ip-amount").value);
  const outputAmount = parseFloat(document.getElementById('withdraw-amount').value);

  btn.setAttribute("disabled", true); 

  if (document.getElementById("ip-amount").value.length != 0){
  await dbank_backend.topUp(inputAmount);
  }

   if (document.getElementById("withdraw-amount").value.length != 0){
  await dbank_backend.decrease(outputAmount);
  }

  await dbank_backend.compound();


  const currentAmount = await  dbank_backend.checkBalance();
  document.getElementById("value").innerText = currentAmount;

  document.getElementById("ip-amount").value = "";
  document.getElementById("withdraw-amount").value = "";

  btn.removeAttribute("disabled");
});