"use client";

import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { useEntryStore } from "@/lib/store";

const Heatmap = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const todaysDates = useEntryStore((state) => state.todaysDates);

  interface FormattedDate {
    date: string;
    count: number;
  }

  const [formattedDates, setFormattedDates] = useState<FormattedDate[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/streak");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();
        console.log("Dates", json);

        interface DateObj {
          createdAt: string;
        }

        // Extract dates
        const dates = json.entries.map((d: DateObj) => {
          return d.createdAt.split("T")[0]; // Remove .toString()
        });

        // Count occurrences of each date
        const dateCounts: { [key: string]: number } = {};
        dates.forEach((date: string) => {
          dateCounts[date] = (dateCounts[date] || 0) + 1;
        });

        // Convert to array format for heatmap
        const formattedUniqueDates: FormattedDate[] = Object.entries(
          dateCounts
        ).map(([date, count]) => ({
          date,
          count,
        }));

        setFormattedDates(formattedUniqueDates);
      } catch (error) {
        console.error("Error fetching dates:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen sm:w-6xl">
      <h3 className="text-center text-sm font-medium text-gray-600 mb-2">
        Your Learning Streak
      </h3>

      <CalendarHeatmap
        startDate={new Date(`${currentYear}-01-01`)}
        endDate={new Date(`${currentYear}-12-31`)}
        values={[...formattedDates, ...todaysDates]}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          // Scale based on count (adjust ranges as needed)
          if (value.count >= 10) return "color-scale-4";
          if (value.count >= 5) return "color-scale-3";
          if (value.count >= 2) return "color-scale-2";
          return "color-scale-1";
        }}
        showWeekdayLabels={true}
      />

      <style jsx>{`
        :global(.react-calendar-heatmap .color-empty) {
          fill: #ebedf0;
        }
        :global(.react-calendar-heatmap .color-scale-1) {
          fill: #9be9a8;
        }
        :global(.react-calendar-heatmap .color-scale-2) {
          fill: #40c463;
        }
        :global(.react-calendar-heatmap .color-scale-3) {
          fill: #30a14e;
        }
        :global(.react-calendar-heatmap .color-scale-4) {
          fill: #216e39;
        }
      `}</style>
    </div>
  );
};

export default Heatmap;
