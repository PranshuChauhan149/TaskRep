import mongoose from "mongoose";

const connectDb = () => {
  try {
    const result = mongoose.connect(process.env.MONGOOSE_URL);
    if (result) {
      console.log("Db connected");
    }
  } catch (error) {
    console.log("Db error");
  }
};

export default connectDb;
