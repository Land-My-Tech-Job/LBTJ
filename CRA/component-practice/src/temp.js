const express = require('express')
const app = express()

app.get( '/', function (req, res) {
    const sum = 1 + 2
    console.log('making a request')
   res.send('Hello Worlsasdfd'+ sum )
 })

app.listen(3003, () => {
    console.log("Listening for requests on port 3003");
});