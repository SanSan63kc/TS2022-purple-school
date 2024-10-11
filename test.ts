interface Data {
    group: number;
    name: string;
}

let data: Data[] = [
    {group: 1, name: "a"},
    {group: 1, name: "b"},
    {group: 2, name: "c"},
]

interface IGroup<T> {
    [key: string]: T[]
}

type key = string | number | symbol

function group<T extends Record<string, any>>(array: T[], key: keyof T): IGroup<T>{
    return array.reduce<IGroup<T>>((map: IGroup<T>, item)=>{
        let itemKey = item[key];
        let currentEl = map[itemKey]
        if (Array.isArray(currentEl)){
            currentEl.push(item)
        } else {
            currentEl = [item]
        }
        map[itemKey] = currentEl
        return map
    }, {})
}

let res = group<Data>(data, "group")
console.log(res)