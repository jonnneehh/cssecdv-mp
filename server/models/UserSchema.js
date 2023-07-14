import mongoose from 'mongoose';

/* username: UNIQUE username 
 * profilephoto: filename of their profile photo
 * email: email of the user. validity is checked upon registering
 * password: String of the user's password to login to site
 */

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
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
        default: Date.now()
    },
    isActive: {
        type: Boolean,
        default: 0
    }
})

const User = mongoose.model('User', UserSchema, "users");

module.export = {"Users" : User}
