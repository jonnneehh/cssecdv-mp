import mongoose from "mongoose"
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true, 
        lowercase: true,
        required: true
    },
    firstname: { 
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    mobilenum: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilephoto: {
        type: String,
        default: "placeholder.jpg"
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    role: {
        type:String,
        default: "regular"
    },
    lastLoggedIn: {
        type: Date,
        default: Date.now()
    },
    isActive: {
        type: Boolean,
        default: false
    }
})

//To Bcrypt Password
UserSchema.pre('save', async function(next){
    try{
        if(this.isNew){
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password, salt)
            this.password = hashedPassword
        } 
        next() 
    }catch(e){ 
        next(e)
    }
})

UserSchema.methods.isValidPassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password)
    } catch (error) {
      throw error
    }
  } 

const User = mongoose.model('User', UserSchema, "users");

export default User 
 