const fs = require('fs'); //for file systems
const request = require('request'); //Module to make requests on webpages

request('http://jsonplaceholder.typicode.com/posts')
.pipe(fs.createWriteStream('./results/posts.txt'));

console.log('Data has been collected');