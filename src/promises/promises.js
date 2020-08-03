const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey! great!')

        } else {
            reject('Ooops!')
        }
    }

    )
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))



const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else {
            const error = new Error('Ooooops!!')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => { console.log('array of results', response)})
    .catch(err => console.log(err))