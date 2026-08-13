/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    // Convert binary string to BigInt
    let num1 = BigInt("0b" + a);
    let num2 = BigInt("0b" + b);

    // Add the two binary numbers
    let sum = num1 + num2;

    // Convert the result back to binary
    return sum.toString(2);
};