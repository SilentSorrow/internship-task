require("dotenv").config();
const express = require("express");
const app = express();
const session = require("./session");
const errorHandler = require("./utils/errorHandler");
const userController = require("./routes/userRoute");
const petController = require("./routes/petRoute");

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.use(session);

app.use("/api/users", userController);
app.use("/api/pets", petController);

app.use(errorHandler);

app.listen(5000, () => console.log("localhost:5000"))