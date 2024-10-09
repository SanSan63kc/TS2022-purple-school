let data = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Надя" },
]

interface ID {
    id: number
}

function sortedArray<T extends ID>(inputData: T[], type: "asc" | "desc"): T[] {
    return inputData.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id
            case "desc":
                return b.id - a.id
        }
    })
}

console.log(sortedArray(data,"asc"))
console.log(sortedArray(data,"desc"))