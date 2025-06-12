import mongoose, { Schema, models, model, Document } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  role: 'doctor' | 'patient';
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['doctor', 'patient'], required: true },
  image: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = models.User || model<IUser>('User', UserSchema);
export default User;
