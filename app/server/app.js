// REQUIRES
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
const app = express();
const logger = require('morgan');

// MIDDLEWARES
app.use(cors({ origin: "*" }));
app.use(logger('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

// API ROUTES:
const thingsRoute = require("./routes/things_route");
app.use("/", thingsRoute);

// CLIENT ROUTES
app.get("*", (req, res) => {
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// LISTEN
const port = process.env.PORT || 3002
app.listen(port, () => console.log(`Server Spinning port ${port} - using ${process.env.NODE_ENV || "development"} environment`));
