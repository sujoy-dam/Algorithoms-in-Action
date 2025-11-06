const datCache = new Map()

const expensiveTask = (id)=>{
console.log("Ran the expensive task for:", id)

return {
    id: id,
    data:`Some data for id: ${id}`,
    timestamp: new Date().getTime()
}
}

const getData= (id)=>{

    if(datCache.has(id)){
        console.log("cachee hit for id:", id)
        return datCache.get(id)
    }
    console.log("Cash Miss for id :", id)
    const data = expensiveTask(123)
    datCache.set(id, data)
    return data;

}

console.log(datCache)
console.log(getData(123))
console.log(getData(123))
console.log(datCache)