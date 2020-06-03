const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require("body-parser");
const passport = require('passport');
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/public"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "public", "index.html"));
  });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.listen(port, () => console.log(`Server is running on port ${port}`));

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  app.use("/api/users", users);
  app.use("/api/tweets", tweets);
