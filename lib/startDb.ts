import mongoose from "mongoose";

export async function startDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("db successful");
  } catch (error) {
    console.log("dbs: " + error);
  }
}
