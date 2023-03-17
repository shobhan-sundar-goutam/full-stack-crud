require("dotenv").config();
const connect = require("./config/database");
const express = require("express");
const cors = require("cors");

const userInfoRoutes = require("./routes/userInfoRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://full-stack-crud.vercel.app"],
  })
);

connect();

app.use("/", userInfoRoutes);

module.exports = app;
