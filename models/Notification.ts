import mongoose, { Schema, models, model, Document } from 'mongoose';
import { IPatient } from './Patient';
import { IDoctor } from './Doctor';

export interface INotification extends Document {
  title: string;
  message: string;
  isRead: boolean;
  patientId?: IPatient['_id'];
  doctorId?: IDoctor['_id'];
  createdAt: Date;
}

const NotificationSchema = new Schema<INotification>({
  title: { type: String, required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient' },
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor' },
  createdAt: { type: Date, default: Date.now },
});

const Notification = models.Notification || model<INotification>('Notification', NotificationSchema);
export default Notification;
