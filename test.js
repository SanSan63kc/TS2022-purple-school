"use strict";
exports.__esModule = true;
exports.decode = exports.encode = void 0;
function encode(string) {
    var str = "aeiou";
    return string.split("").map(function (symb) {
        if (str.indexOf(symb.toLowerCase()) != -1)
            return str.indexOf(symb.toLowerCase()) + 1;
        else
            return symb;
    }).join("");
}
exports.encode = encode;
// turn numbers back into vowels
function decode(string) {
    var numberArr = ["1", "2", "3", "4", "5"];
    var str = "aeiou";
    return string.split("").map(function (symb) {
        if (numberArr.indexOf(symb) != -1)
            return "aeiou"[numberArr.indexOf(symb)];
        else
            return symb;
    }).join("");
}
exports.decode = decode;
//it("Encode", function() {
console.log(encode('hello')); //, 'h2ll4');
console.log(encode('How are you today?')); //, 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.')); //, 'Th3s 3s 1n 2nc4d3ng t2st.');
// });
// it("Decode", function() {
console.log(decode('h2ll4')); //, 'hello');
console.log(decode('H4w 1r2 y45 t4d1y?')); //, 'How are you today?');
console.log(decode('Th3s 3s 1n 2nc4d3ng t2st.')); //, 'This is an encoding test.');
