"use strict";
exports.__esModule = true;
exports.abbreviate = void 0;
function abbreviate(str) {
    function modifyWord(input) {
        if (input.length <= 3)
            return input;
        else
            return "".concat(input[0]).concat(input.slice(1, input.length - 1).length).concat(input[input.length - 1]);
    }
    var arr = str.split(" ").map(function (val) {
        if (val.indexOf("-") != -1) {
            var arr_1 = val.split("-");
            return arr_1.map(function (word) { return modifyWord(word); }).join("-");
        }
        else
            return modifyWord(val);
    });
    return arr.join(" ");
}
exports.abbreviate = abbreviate;
console.log(abbreviate("internationalization")); //, "i18n");
console.log(abbreviate("accessibility")); //, "a11y");
console.log(abbreviate("Accessibility")); //, "A11y");
console.log(abbreviate("elephant-ride")); //, "e6t-r2e");
console.log(abbreviate("elephant-rides are really fun!")); //, "e6t-r2e");
