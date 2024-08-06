import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config({ path: ".env" });

export const dbConnection = () => {
  mongoose
    .connect('mongodb://localhost:27017', {
      dbName: "JobUp",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};

// import mongoose from "mongoose";

// export const dbConnection = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1); // Exit the process with failure
//   }
// };


