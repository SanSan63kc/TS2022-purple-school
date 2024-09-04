function getFullName(userEntity:{firstname: string, surname: string}): string{
    return `${userEntity.firstname} ${userEntity.surname}`
}

let getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`
}

let user = {
    firstname: "Александр", 
    surname: "Сёмушкин", 
    city: "Нск",
    age: 33, 
    skills: {
        dev: true,
        devops: false
    }
}

console.log(getFullName(user))