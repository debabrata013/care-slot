import mongoose, { Schema, models, model, Document } from 'mongoose';
import { IAppointment } from './Appointment';
import { IDoctor } from './Doctor';

export interface IPatientRecord extends Document {
  appointmentId: IAppointment['_id'];
  doctorId: IDoctor['_id'];
  notes?: string;
  diagnosis?: string;
  prescription?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PatientRecordSchema = new Schema<IPatientRecord>({
  appointmentId: { type: Schema.Types.ObjectId, ref: 'Appointment', required: true, unique: true },
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  notes: String,
  diagnosis: String,
  prescription: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const PatientRecord = models.PatientRecord || model<IPatientRecord>('PatientRecord', PatientRecordSchema);
export default PatientRecord;
