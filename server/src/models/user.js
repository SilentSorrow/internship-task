const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const db = require("../db");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        required: true,
        default: false,
    }
});

userSchema.methods.hashPassword = function (password) {
    const salt =  bcrypt.genSaltSync(10);
    const hash =  bcrypt.hashSync(password, salt);
  
    return hash;
};
  
userSchema.methods.isPasswordValid = function (password) {
    const result = bcrypt.compareSync(password, this.password);

    return result;
};
  
userSchema.pre("save", function (next){
    if (this.isModified("password")){
        this.password = this.hashPassword(this.password);
    }

    next();
});

module.exports = db.model("User", userSchema);