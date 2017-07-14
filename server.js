/**
 * Created by saurabhagarwal on 7/7/17.
 */

const express = require('express')

const app = express();
app.get('/' , function (req,res,next) {
    res.send('Hello')
})

app.get('/greet' , function (req,res,next) {
    console.log(req.query)
    let name = req.query.name;
    res.send('Greetings to ' + name)
})

app.listen(8000)