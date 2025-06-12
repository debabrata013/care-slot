import mongoose, { Schema, models, model, Document } from 'mongoose';
import { IUser } from './User';

export interface IPatient extends Document {
  userId: IUser['_id'];
  dateOfBirth?: Date;
  phone?: string;
  address?: string;
  createdAt: Date;
}

const PatientSchema = new Schema<IPatient>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  dateOfBirth: Date,
  phone: String,
  address: String,
  createdAt: { type: Date, default: Date.now },
});

const Patient = models.Patient || model<IPatient>('Patient', PatientSchema);
export default Patient;
