"use strict";
let key = "age";
function getValue(obj, key) {
    return obj[key];
}
let user = {
    name: "saa",
    age: 34
};
let userName = getValue(user, "name");
