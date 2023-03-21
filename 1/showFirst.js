// Usage: node showFirst.js

// Feature: Show the first beer in a `${name} (${brewery})` format 
// in the console.

const getBeers = require('../data')

function main() {
    let beer=getBeers();

    //console.log(`${name} (${brewery})`)
    console.log(beer[0].name,beer[0].brewery)
}

main()
