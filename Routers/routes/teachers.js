/**
 * Created by saurabhagarwal on 7/9/17.
 */


const route = require('express').Router();

let teachers = [
    {name:"ram", age:"31"},
    {name:"Shyam", age:"33"},
    {name:"hari", age:"32"},

]
route.get('/', (req,res)=>{
    res.send(teachers);
})
route.get('/:id' , (req,res)=>{
    res.send(teachers[req.params.id - 1])
})
module.exports = route