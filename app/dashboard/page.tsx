// ❌ NO "use client"
import { auth, currentUser } from "@clerk/nextjs/server";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser(); // Safe server-side Clerk function
  if (!user) return redirect("/");

  await dbConnect();
  let dbUser = await User.findOne({ clerkId: user.id });

  if (!dbUser) {
    dbUser = await User.create({
      clerkId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      role: "user",
    });
    console.log("🆕 New user created:", dbUser);
  }

  if (dbUser.role === "doctor") {
    return redirect("/dashboard/doctor");
  } else {
    return redirect("/dashboard/user");
  }
}
 