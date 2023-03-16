require("dotenv").config();
const connect = require("./config/database");

const express = require("express");

const userInfoRoutes = require("./routes/userInfoRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect();

app.use("/", userInfoRoutes);

module.exports = app;
