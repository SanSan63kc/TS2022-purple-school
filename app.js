"use strict";
let skills = ["Dev", "DevOps", "Testing"];
for (let skill of skills) {
    console.log(skill.toLowerCase());
}
let result = skills
    .filter(s => s !== "DevOps")
    .map(s => s + "!")
    .reduce((a, b) => a + b);
console.log(result);
