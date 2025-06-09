import mongoose, { Schema, models, model } from "mongoose";

const AppointmentSchema = new Schema(
  {
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "User", // Assuming doctor bhi User schema me hai with role: 'doctor'
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    timeSlot: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    notes: {
      type: String,
      default: "",
    },
    symptoms: {
      type: [String], // Example: ["fever", "cough"]
      default: [],
    },
    mode: {
      type: String,
      enum: ["offline", "online"],
      default: "offline",
    },
    meetingLink: {
      type: String,
      default: "", // if online
    },
    clinicAddress: {
      type: String,
      default: "", // optional
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Indexing for performance
AppointmentSchema.index({ doctorId: 1, timeSlot: 1 }, { unique: true });

const Appointment =
  models.Appointment || model("Appointment", AppointmentSchema);

export default Appointment;

  
  