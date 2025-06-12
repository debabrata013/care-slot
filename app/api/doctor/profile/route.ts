"use server"
import{ dbConnect} from "@/lib/dbConnect";
import Doctor from "@/models/Doctor";
import { getAuth } from "@clerk/nextjs/server";  // Clerk auth integration

export default async function handler(req, res) {
  await dbConnect();
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // GET Profile
  if (req.method === 'GET') {
    const doctor = await Doctor.findOne({ userId }).populate('userId');
    if (!doctor) {
      return res.status(404).json({ message: "Doctor profile not found" });
    }
    return res.status(200).json(doctor);
  }

  // UPDATE Profile
  if (req.method === 'PUT') {
    const { specialization, experience, qualification, bio, consultationFee, location } = req.body;

    let doctor = await Doctor.findOneAndUpdate(
      { userId },
      { specialization, experience, qualification, bio, consultationFee, location },
      { new: true, upsert: true }
    );

    return res.status(200).json(doctor);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
