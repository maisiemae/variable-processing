var input_bill = Number(prompt("What is your bill?"));
var tax_amount=input_bill*.07;
var tax_total_bill=input_bill+tax_amount;
var tip_amount=tax_total_bill*.05;
var total=tip_amount+tax_total_bill
var element = document.body.querySelector(".box");

element.innerHTML=total;

