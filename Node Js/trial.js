const express = require('express');
const app = express();
const teacherRouter = require('./teacher')

app.use(express.json());

app.use((req, res, next) => {
     app.use('/teachers', teacherRouter);
    console.log(`${req.method} ${req.url}`);
   
    next();
})



app.get("/", (req, res) => {
    res.end("Hello you are at Home Page");
})

app.listen(3000, () => {
    console.log("server running on http://localhost:3000");
})