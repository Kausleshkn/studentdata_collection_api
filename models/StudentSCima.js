import mongoose from 'mongoose';

const userScima = new mongoose.Schema({
    name:{type:String, required:true,trim:true},
    age:{type:Number,required:true},
    fees:{type:Number,required:true}
})

const userModel = mongoose.model('user',userScima);

export default userModel;