const mongoose = require("mongoose");
async function connectDB() {
  try {
    await mongoose.connect(process.env.MongoDB_URI);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    throw err;
  }
}

module.exports = { connectDB };
