/**
 * Created by saurabhagarwal on 7/9/17.
 */

const route = require('express').Router();

let students = [
    {name:"Saurabh", age:"21"},
    {name:"Saurab", age:"23"},
    {name:"Saura", age:"22"},

]
route.get('/', (req,res)=>{
    res.send(students);
})

route.get('/:id' , (req,res)=>{
    res.send(students[req.params.id - 1])
})

route.post('/new', (req,res)=>{
    students.push({
        name: req.body.name,
        age: req.body.age
    })
    res.send("Success: true")
})

module.exports = route