import mongoose, { Schema, models, model, Document } from 'mongoose';
import { IPatient } from './Patient';
import { IDoctor } from './Doctor';
import { IAvailableSlot } from './AvailableSlot';

export interface IAppointment extends Document {
  patientId: IPatient['_id'];
  doctorId: IDoctor['_id'];
  slotId: IAvailableSlot['_id'];
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>({
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  slotId: { type: Schema.Types.ObjectId, ref: 'AvailableSlot', required: true, unique: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Appointment = models.Appointment || model<IAppointment>('Appointment', AppointmentSchema);
export default Appointment;
