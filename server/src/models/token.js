const mongoose = require("mongoose");
const db = require("../db");

const tokenSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: "User",
    },
    hash: { 
        type: String, 
        required: true, 
    },
});

module.exports = db.model("Token", tokenSchema);