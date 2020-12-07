function addition(a, b) {
    return a + b;
}

function substraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function functions() {
    addition(1,2);
    substraction(1,2);
    multiplication(1,2);
    division(1,2);
}

module.exports = {
    addition,
    substraction,
    multiplication,
    division,
    functions
 }