const expensiveTask = (id)=>{
    console.log("Ran the expensive task for:", id);

    return {
        id: id,
        data:`Some data for id: ${id}`,
        timestamp: new Date().getTime()
    }
}
const getData= (id)=>{
    const x = expensiveTask(id)
    console.log(x)
    return x
}
console.log(getData(123))