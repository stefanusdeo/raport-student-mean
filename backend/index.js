const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

process.on("uncaughtException", (ex) => {
  console.error(ex.message);
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);

    console.log("Connect to DB....");
  } catch (error) {
    console.error(error.message);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send({ message: "Hello, its Deo API" });
});

require("./routes/index")(app);

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening in port ${port}`));
