require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const routeProtector = require("./middleware/routeProtector");
const userRouter = require("./routes/userRoute");
const petRouter = require("./routes/petRoute");

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

app.use(routeProtector);

app.use("/api/users", userRouter);
app.use("/api/pets", petRouter);

app.use(errorHandler);

app.listen(5000, () => console.log("localhost:5000"));
