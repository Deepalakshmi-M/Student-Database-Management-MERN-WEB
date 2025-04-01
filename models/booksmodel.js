const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    rnum:{
        type:Number,
        required:true
    },
    pnum:{
       type:Number,
       required:true
   }
   ,
    branch:{
        type:String,
        required:true
    }
    ,
    dept:{
        type:String,
        required:true
    }
    ,
    email:{
        type:String,
        required:true
    }
    
   
});

module.exports=new mongoose.model('books',userSchema)
