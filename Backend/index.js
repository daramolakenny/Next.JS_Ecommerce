const express = require('express');

const app = express();
const port = 3000;

const password = "@Kenny2000$";

app.get('/', (req, res) => {
    if(password === "@Kenny2000$"){
        res.redirect('/Home');
    }
})

// app.post('/submit', (req, res) => {

//     const enterPasword = req.body[fName]
// });

app.listen(port, ()=> {
    console.log(`Server is Listerning on port ${port}`);
});