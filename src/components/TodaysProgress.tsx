"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useEffect, useState } from "react";
import { useEntryStore } from "@/lib/store";

export default function TodaysProgress() {
  const setEntries = useEntryStore((state) => state.setEntries);
  const entries = useEntryStore((state) => state.entries);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/todaysProgress");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();

        // Ensure json.data exists and is an array

        setEntries(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setEntries]);

  return (
    <Card className="w-screen sm:max-w-lg h-72 mt-4 shadow-sm border-none">
      <CardHeader>
        <CardTitle className="text-lg font-semibold mb-3 text-gray-800">
          Todays progress
        </CardTitle>
        <CardDescription></CardDescription>
        {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
      </CardHeader>
      <CardContent>
        {isLoading && <p>Loading...</p>}
        {entries.map((entry) => {
          return <div key={entry.id}>{entry.title}</div>;
        })}
      </CardContent>
      {/* <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter> */}
    </Card>
  );
}
