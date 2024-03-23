import mongoose from "mongoose";

export async function startDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
  } catch (error) {
    console.log("db: " + error);
  }
}
