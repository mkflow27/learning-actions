const fs = require('fs');



var rnd = Math.random()
var str = rnd.toString()
console.log(str)

//fs.writeFileSync(`${str}.txt`, Date(Date.now()))
fs.writeFileSync("sample.txt", Date(Date.now()))

