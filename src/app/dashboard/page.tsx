import MainDashboard from "@/components/MainDashboard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/"); // ← Redirect to home page
  }

  return (
    <div className="p-4">
      <MainDashboard />
    </div>
  );
}
