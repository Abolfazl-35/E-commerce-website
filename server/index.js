const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routs/userRoute");

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("welcome to our minichat...");
});
app.use("/api/users", userRoute);


const port = process.env.PORT || 3001;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`server running on port${port}`);
});

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("monogodb conected"))
  .catch((error) => console.log("mongodb conection failed", error.massage));


