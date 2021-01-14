const salaries = document.getElementsByClassName("salary");

for (var i = 0; i < salaries.length; i++) {
    console.log(parseInt(salaries[i].value), "salaries");
}

let salariesAddition = parseInt(salaries[0].value) + parseInt(salaries[1].value) + parseInt(salaries[2].value);
console.log(salariesAddition, "salariesAddition");

let tax = parseInt(document.getElementById("tax").value);
console.log(tax, "tax");

let result = salariesAddition / tax;

function salaryCalculator() {
    console.log(result, "result")
    return result;
}
