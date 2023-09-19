import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  // check if DB is already connected
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // if not connected connect to mongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "quotevault",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected.");
  } catch (error) {
    console.log(error);
  }
};
