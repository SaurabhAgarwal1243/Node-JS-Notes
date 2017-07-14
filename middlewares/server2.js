/**
 * Created by saurabhagarwal on 7/9/17.
 */

const express = require('express');

const app = express();

app.use((req,res,next)=> {
    console.log("global middleware"); next();
})

app.use('/info',(req,res,next)=> {
    console.log("Info path middleware"); next();
})

app.get('/', (req,res)=> {
    res.send('hello')
})
app.get('/info' , (req,res)=>{
    res.send('information')
})
app.get('/info/1',(req,res) => {
    res.send('information about 1');
})
app.post('/info/1',(req,res)=>{
    res.send('you posted details about 1')
})
app.use((req,res,next)=>{
    res.send("Nothing to be found here")
})
app.listen(8002);