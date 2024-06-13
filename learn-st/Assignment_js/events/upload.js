const express=require('express')
const multer=require('multer')
const app=express()
const port=3000
const upload=multer({dest:'uploads/'})
app.post('upload',ipload.single('file'),(req,res)=>{
    if(!req.file){
        return res.status(400).send('no file upload')
    }
    res.json({message:'file upload successfully',file:req.file})
})
app.listen(port,()=>{
    console.log('server running at http://localhost:${port}')
})