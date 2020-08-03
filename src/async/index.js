const doSomethingAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('Do something async'), 3000)
        : reject(new Error('test error'))
    })
}


const doSomething = async () => {
    const something = await doSomethingAsync()
    console .log(something)
}

console.log('before 1')
doSomething()
console.log('after 1' )



const anotherFunction = async () => {
    try{
        something = await doSomethingAsync()
        console .log(something)
    } catch (error) {
        console.log(error)
    }
}

console.log('before 1')
anotherFunction()
console.log('after 1' )