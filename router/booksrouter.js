const router = require("express").Router();
const bookModel=require("../models/booksmodel");

router.post("/add",async (req,res) => {
    try{
        const data = req.body;
        const newBook =new bookModel(data);
        await newBook.save().then(()=>{
            res.status(200).json ({ message : "Book Added Succesfully"});
        })
    }
    catch(error){
        console.log(error);
    }
});

router.get("/getBooks",async(req,res) => {
    let books;
    try{
        books =await bookModel.find();
        res.status(200).json({ books });
    }
    catch(error){
        console.log(error);
    }
})

router.get("/getBooks/:id",async(req,res) => {
    let book;
    const id =req.params.id;
    try{
        book =await bookModel.findById(id);
        res.status(200).json({ book });
    }
    catch(error){
        console.log(error);
    }
})

router.put("/updateBook/:id",async(req,res) =>{
    const id = req.params.id;
    const{name,pnum,branch,dept} = req.body;
    let book;
    try{
        book = await bookModel.findByIdAndUpdate(id,{
            name,
            pnum,
            branch,
            dept
        });
        await book.save().then(()=>res.send(200).json({message:"data udated"}))
    }
    catch(error){
        console.log(error)
    }
})

router.delete("/deleteBook/:id",async (req,res) => {
    const id =req.params.id;
    try{
        await bookModel.deleteById(id).then(()=>res.status(201).json({message:"deleted"}));
    }        catch(error){
        console.log(error);
    }

})



module.exports =router;