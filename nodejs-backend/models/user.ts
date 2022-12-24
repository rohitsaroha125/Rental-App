const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required field']
    },
    email: {
        type: String,
        required: [true, 'Email is required field'],
        unique: [true, 'This email already exists']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    photo: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'Password is required field'],
        select: false
    },
    passwordConfirm: {
        type: String,
        validate: {
            validator: function (val: string): boolean {
                return val === this.password
            }
        }
    }
})