import mongoose, { Schema, models, model, Document } from 'mongoose';
import { IDoctor } from './Doctor';

export interface IAvailableSlot extends Document {
  doctorId: IDoctor['_id'];
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

const AvailableSlotSchema = new Schema<IAvailableSlot>({
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
});

const AvailableSlot = models.AvailableSlot || model<IAvailableSlot>('AvailableSlot', AvailableSlotSchema);
export default AvailableSlot;
