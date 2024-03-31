import mongoose, {
  HydratedDocument,
  Model,
  model,
  models,
  Schema,
} from "mongoose";
// import bcrypt from "bcrypt";
import bcrypt from "bcryptjs";
import { GlobalErrorHandler } from "@/app/utils/globarErrorHandler";

export interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

UserSchema.pre("save", async function (next) {
  try {
    const salt = 10;
    // const salt = await bcrypt.genSalt(10); //also correct
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error: any) {
    return next(error);
  }
});

const UserModel = models.User || model<UserInterface>("User", UserSchema);
export default UserModel;
