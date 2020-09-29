const mongoose = require("mongoose");
const db = require("../db");

const petSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    breed: {
        type: String,
        required: true
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: "User",
    },
});

module.exports = db.model("Pet", petSchema);