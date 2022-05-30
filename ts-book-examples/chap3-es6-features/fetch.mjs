const fetch = require('node-fetch')
try {
(async function getData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    if(response.ok) {
        const result = await response.json()
        console.log(result)
    } else {
        console.log('failed to get anything')
    }
})()
} catch(err) {
    console.log(err)
}