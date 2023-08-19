const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(usersRouter);

//Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//Not found route error
app.use((req, res, next) => {
  res.status(404).json({ message: "Bad request" });
});

//Server error
app.use((err, req, res, next) => {
  res.status(404).json({ message: "something broke" });
});

module.exports = app;