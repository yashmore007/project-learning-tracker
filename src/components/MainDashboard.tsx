import Heatmap from "./Heatmap";
import TodaysProgress from "./TodaysProgress";
import WhatsNext from "./WhatsNext";

const MainDashboard = () => {
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
