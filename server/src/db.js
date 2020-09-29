const mongoose = require("mongoose");
const bluebird = require("bluebird");

const connectionString = process.env.DB_URI;

mongoose.Promise = bluebird;

module.exports = mongoose.createConnection(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});