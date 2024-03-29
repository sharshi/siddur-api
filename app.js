require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require('passport');
const path = require("path");
const cors = require("cors");

const users = require("./routes/api/users");
const siddur = require("./routes/api/siddur");
const databaseOptions = require("./config/database.config");
const { mongoURI } = require("./config/keys");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/siddur", siddur);

mongoose
  .connect(mongoURI, databaseOptions)
  .then(() => console.log("Connected to MongoDB successfully"))
  .then(() => app.listen(port, () => console.log(`Server is running on port ${port}`)))
  .catch(err => console.log(err));
