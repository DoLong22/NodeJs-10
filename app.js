const express = require("express");
const upload = require('./uploadConfig');
const reload = require('reload');

const app = express();

app.set('views','./views');
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index');
});

app.post('/signup',upload.single('profile'),(req,res)=>{
    res.send(req.body);    
})
reload(app);

app.listen(3000,()=>console.log('Server started'));