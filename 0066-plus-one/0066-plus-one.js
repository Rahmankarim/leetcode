/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    // Convert the array [1, 2, 3] into the string "123"
    let str = digits.join("");

    // Convert the string "123" into the number 123
    let num = BigInt(str);

    // Add 1 to the number
    num = num + 1n;

    // Convert the number back to a string
    let result = String(num);

    // Convert each character back into a number
    return result.split("").map(Number);
};