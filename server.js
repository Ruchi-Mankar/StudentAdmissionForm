const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
//db connection
const db= mysql.createConnection({
    host: 'localhost',
    user: 'typehere',
    password: 'typehere',
    database: 'Admission'
});

app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.post('/submit', (req, res) => {
    const { name, email, number, dob, gender, course } = req.body;
    //quesry for inserting:
    const query = 'INSERT INTO students(name, email, number, dob, gender, course) VALUES (?, ?, ?, ?, ?, ?)'
    db.query(query, [name, email, number, dob, gender, course], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error storing data.(✖╭╮✖)');
          }
        res.status(200).send('Data stored successfully.☺');
    });
});

//server:
const PORT=3000;
app.listen(PORT, () =>{
    console.log(`server is running, port is ${PORT}`)
});
