require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const session = require("./session");
const errorHandler = require("./middleware/errorHandler");
const routeProtector = require("./middleware/routeProtector");
const userController = require("./routes/userRoute");
const petController = require("./routes/petRoute");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(session);
app.use(routeProtector);

app.use("/api/users", userController);
app.use("/api/pets", petController);

app.use(errorHandler);

app.listen(5000, () => console.log("localhost:5000"));
