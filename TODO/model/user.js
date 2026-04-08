
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   
    name:{ 
        type:String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        select:false
    }
},
{
    timestamp:true
})
const User = mongoose.model('Users', userSchema);

export default User;