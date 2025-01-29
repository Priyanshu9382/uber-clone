const mongoose = require("mongoose");

async function connectToDb() {
  console.log("connecting to Db")
  await mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error("Error connecting to DB:", err.message);
      process.exit(1)
    });
}

module.exports = connectToDb;
