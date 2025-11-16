import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { House } from "lucide-react";
import { ChartSpline } from "lucide-react";

export default function CardDemo() {
  return (
    <Card className="hidden sm:block w-[20vw] h-screen border-none rounded-none shadow-sm">
      <CardHeader>
        <CardTitle className="text-center">Learning Tracker</CardTitle>
      </CardHeader>
      <CardContent className="mt-4 flex flex-col gap-4">
        <div className="shadow-sm p-1 ml-2 gap-3 hover:bg-gray-200 rounded-sm cursor-pointer">
          <div className="ml-3 flex gap-2 items-center">
            <House />
            Home
          </div>
        </div>

        <div className="shadow-sm ml-2 p-1 hover:bg-gray-200 rounded-sm cursor-pointer">
          <div className="ml-3 gap-2 flex items-center">
            <ChartSpline />
            Stats
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
