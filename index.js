const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const counter = require("./route/counter");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

mongoose.connect(process.env.DB_MONGODB_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;

app.use("/api", counter);

db.on("error", console.error.bind(console, "Connection error!"));
db.on("open", () => console.log("We are connected to the database!"));

app.listen(port, () => console.log(`Your server is listening to port ${port}`));
