import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Topbar = () => {
  return (
    <div className="">
      <Card className="rounded-none h-20 border-none">
        <CardHeader>
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">Hey Yash!👋</CardTitle>
            </div>

            <CardDescription className="text-md">
              Level 3 – Consistent Learner 🔥
            </CardDescription>
            <CardDescription>
              <p className="text-md">Total Hours: 120 | Streak: 5 days</p>
            </CardDescription>
            <div className="p-2 shadow-sm rounded-sm flex items-center gap-2">
              <Progress
                value={33}
                className="h-2 mb-1 w-60 bg-slate-200 [&>div]:bg-linear-to-r [&>div]:from-indigo-500 [&>div]:to-purple-600"
              />
              <span className="mb-1">Progress</span>
            </div>
          </div>

          <CardAction className="flex mt-1 items-center gap-4">
            <Button variant="outline" className="hover:bg-gray-200">
              Log Learnings
            </Button>

            <Button variant="outline" className="hover:bg-gray-200">
              Sign Out
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Topbar;
