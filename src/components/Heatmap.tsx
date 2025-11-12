"use client";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const Heatmap = () => {
  return (
    <div className="w-screen sm:w-6xl">
      <h3 className="text-center text-sm font-medium text-gray-600 mb-2">
        Your Learning Streak
      </h3>

      <CalendarHeatmap
        startDate={new Date("2016-01-01")}
        endDate={new Date("2016-12-31")}
        values={[
          { date: "2016-01-01", count: 12 },
          { date: "2016-01-22", count: 122 },
          { date: "2016-01-30", count: 38 },
          // ...and so on
        ]}
      />
    </div>
  );
};

export default Heatmap;
