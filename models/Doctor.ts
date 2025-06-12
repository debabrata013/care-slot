import mongoose, { Schema, models, model, Document } from 'mongoose';
import { IUser } from './User';

export interface IDoctor extends Document {
  userId: IUser['_id'];
  specialization: string;
  experience: number;
  qualification: string;
  bio?: string;
  consultationFee: number;
  location?: string;
  createdAt: Date;
}

const DoctorSchema = new Schema<IDoctor>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true },
  qualification: { type: String, required: true },
  bio: String,
  consultationFee: { type: Number, default: 0 },
  location: String,
  createdAt: { type: Date, default: Date.now },
});

const Doctor = models.Doctor || model<IDoctor>('Doctor', DoctorSchema);
export default Doctor;
