import Heatmap from "./Heatmap";
import TodaysProgress from "./TodaysProgress";
import WhatsNext from "./WhatsNext";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const MainDashboard = async () => {
  const session = await auth();

  if (!session) {
    redirect("/"); // ← Redirect to home page
  }
  return (
    <div className="flex flex-col items-center gap-9">
      <div className="flex flex-col sm:flex-row gap-16">
        <WhatsNext />
        <TodaysProgress />
      </div>
      <div>
        <Heatmap />
      </div>
    </div>
  );
};

export default MainDashboard;
