const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'./public');
    },
    // filename:(req,file,cb)=>{cb(null, Date.now()+'.png')} //Date.now() để tên file ko bị trùng vì bị trùng sẽ bị ghi đè
    filename:(req,file,cb)=>{ cb(null,'big-'+file.originalname)
    } 
});
function fileFilter(req, file, cb){
    const {mimetype} =file;
    if(mimetype === 'image/png' || mimetype === 'image/jpgeg'){
        return cb(null,true);
    }
    cb(new Error('File không đúng định dạng'));
}

const limits ={fileSize:102400};
// const upload = multer({dest:'./public'})
const upload = multer({storage:storage, limits:limits, fileFilter});


module.exports = upload