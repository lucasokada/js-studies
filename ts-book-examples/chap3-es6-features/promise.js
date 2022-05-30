const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('I completed successfully')
        // reject('I failed')
    }, 500)
})

myPromise.then(done => {
    console.log(`In then: ${done}`)
}).
catch(err =>{
    console.log(`In catch: ${err}`)
})