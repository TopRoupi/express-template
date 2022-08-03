// REQUIRES
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
const app = express();

// PERSONAL ROUTES:
const thingsRoute = require("./routes/things_route");

// DB CONNECTION
// models = require("../../db/models/index")
//
// const thing = new models.Thing({ name: "aaAA" });
// thing.save()
// console.log(thing)

// MIDDLEWARES
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());

// PERSONAL MIDDLEWARES
app.use("/", thingsRoute);

// UNHANDLED ROUTES
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

module.exports = app;
