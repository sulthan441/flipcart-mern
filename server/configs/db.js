const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();


mongoose.set("strictQuery", true);

const connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/flipkart");
  
};

module.exports = connection;
