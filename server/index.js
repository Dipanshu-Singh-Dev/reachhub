const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./configs/swaggerConfig");
const Authorisation = require('./middlewares/Authorisation')
require("dotenv").config();
const cookieParser = require("cookie-parser");
const generateNUpdateCSV = require("./controllers/generateNUpdateCSV");

const app = express();
const PORT = process.env.PORT || 3000;
const frontendUrl = "http://localhost:5173";

app.use(
  cors(
    { origin: frontendUrl, credentials: true },
    { origin: "https://reachhub-nine.vercel.app/", credentials: true }
  )
);
app.use(express.json(),cookieParser());
app.use("/signup", require("./controllers/signup"));
app.use("/login", require("./controllers/login"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
app.use(Authorisation)
app.use("/top-players", require("./controllers/top-players"));
app.use("/ratings", require("./controllers/rating"));
app.use(
  "/rating-history-csv",
  require("./controllers/rating-history-csv")
);

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

app.listen(PORT, async () => {
  try {
    generateNUpdateCSV();
    setInterval(() => {
      generateNUpdateCSV();
    }, 1000 * 60 * 60 * 24);
    await connection;
    console.log("DB is connected");
    console.log("Server is running");
  } catch (error) {
    console.log("Error while connecting to db");
    console.log(error);
  }
});
