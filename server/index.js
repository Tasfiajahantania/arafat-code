const { response } = require('express')
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
port = 5000


app.use(cors());


const category = require('./data/category.json')
const courses = require('./data/courses.json')

app.get('/course/category', (req, res) => {
    res.send(category)
})

app.get('/course/category/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.filter(n => n.category_id === id)
    res.send(course)

})
app.get('/course/detail/:id', (req, res) => {

    const id = req.params.id;
    const course = courses.find(n => n._id == id)
    res.send(course)

})

app.get('/all/course', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`Server is running ${port}`);
})