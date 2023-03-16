const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;

const connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`Connected DB: ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log("DB conncetion failed");
      console.log(error);
      procces.exit(1);
    });
};

module.exports = connect;
