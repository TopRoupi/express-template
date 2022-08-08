// REQUIRES
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
const app = express();
const logger = require('morgan');
var session = require('express-session')

// MIDDLEWARES
app.use(cors({ origin: "*" }));
app.use(logger('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
// https://expressjs.com/en/resources/middleware/session.html
var sess = {
  secret: process.env.SECRET_KEY,
  cookie: {},
  resave: true,
  saveUninitialized: true
}
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess))

// API ROUTES:
const thingsRoute = require("./routes/things_route");
const usersRoute = require("./routes/users_route");
app.use("/", thingsRoute);
app.use("/", usersRoute);

// CLIENT ROUTES
app.get("*", (req, res) => {
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = app;
