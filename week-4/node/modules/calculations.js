function sum(a, b) {
    return a + b;
}

function division(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}


// module.exports = { //Wanneer we een key meegeven aan de export
//     sumFunction: sum,
//     divideFunction:division,
//     multiplyFunction:multiply
// };

// module.exports = {
//     sum:sum,
//     division:division,
//     multiply:multiply
// };

module.exports = { //Wanneer de namen overeenkomen mag je in javascript ze 1x noteren
    sum,
    division,
    multiply
};
