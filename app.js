"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
let getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
let user = {
    firstname: "Александр",
    surname: "Сёмушкин",
    city: "Нск",
    age: 33
};
console.log(getFullName(user));
