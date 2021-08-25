const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
const routes = require("./routes");

app.use(require("express-status-monitor")());

app.set("view engine", "ejs");
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(fileUpload());
app.use(cors());

app.use(routes);

// The error handler must be before any other error middleware and after all controllers
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const { message } = error;
  const { data } = error;
  return res.status(status).json({
    message: message,
    data: data,
  });
});

console.log("SERVER IS UP >>>> ");

module.exports = app;
