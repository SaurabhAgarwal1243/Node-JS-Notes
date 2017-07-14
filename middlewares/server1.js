/**
 * Created by saurabhagarwal on 7/9/17.
 */
const express = require('express');

const app = express();
function m1(req,res,next) {
    console.log("middleware1");
    next();
}
function m2(req,res,next) {
    console.log("middleware2");
    next();
}

function m3(req,res,next) {
    console.log("middleware3");
    console.log(res.body)
}

app.use(m1);
app.use(m2);
app.get('/' , (req,res,next) =>{
    console.log('Going to send hello')
    res.body = 'say hello'
    res.send(res.body)
    console.log(res.body)
    next();
})

app.use(m3);

app.listen(8001)
