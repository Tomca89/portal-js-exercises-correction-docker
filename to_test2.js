function salaryCalculator() {
    var salaries = document.getElementsByClassName("salary");

    for (var i = 0; i < salaries.length; i++) {
        console.log(salaries[i].value, "salaries");
    }

    var salariesAddition = parseInt(salaries[0].value) + parseInt(salaries[1].value) + parseInt(salaries[2].value);
    console.log(salariesAddition, "salariesAddition");

    var tax = document.getElementById("tax").value;
    console.log(tax, "tax");

    var result = salariesAddition / tax;

    console.log(result, "result")
    return result;
}

module.exports = {
    salaryCalculator
};