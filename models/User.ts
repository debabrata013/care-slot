import mongoose, { Schema, models } from "mongoose";
const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    name: String,
    role: { type: String, enum: ['doctor', 'user'], required: true },
  });
  
  
const User = models.User || mongoose.model("User", UserSchema);
export default User;