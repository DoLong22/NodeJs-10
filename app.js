const express = require("express");

const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'./public');
    },
    filename:(req,file,cb)=>{cb(null,'a.png')}
})
// const upload = multer({dest:'./public'})
const upload = multer({storage:storage});

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