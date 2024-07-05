const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://satyamstudentprofile:<Pandey12345>@cluster0.mfoimsp.mongodb.net/');
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
