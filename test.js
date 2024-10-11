"use strict";
let data = [
    { group: 1, name: "a" },
    { group: 1, name: "b" },
    { group: 2, name: "c" },
];
function group(array, key) {
    return array.reduce((map, item) => {
        let itemKey = item[key];
        let currentEl = map[itemKey];
        if (Array.isArray(currentEl)) {
            currentEl.push(item);
        }
        else {
            currentEl = [item];
        }
        map[itemKey] = currentEl;
        return map;
    }, {});
}
let res = group(data, "group");
console.log(res);
