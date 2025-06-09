import mongoose, { Schema, models } from "mongoose";
const DoctorSchema = new Schema({
    userId: { type: String, ref: 'User' },
    specialization: String,
    clinicAddress: String,
    availableSlots: [Date],
  });
  
  
const Doc = models.User || mongoose.model("Doc", DoctorSchema);
export default Doc;