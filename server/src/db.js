const mongoose = require("mongoose");

const connectionString = process.env.DB_URI;


module.exports = mongoose.createConnection(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});