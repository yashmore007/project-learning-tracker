import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ChartNoAxesColumn } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-screen sm:w-7xl">
      <Card className="rounded-none h-20 border-none">
        <CardHeader>
          <div className="flex items-center gap-9">
            <div className="flex mt-1 gap-4 items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <ChartNoAxesColumn className="sm:hidden" />
              <CardTitle className="hidden sm:block lg:text-lg">
                Hey Yash!👋
              </CardTitle>
            </div>

            <CardDescription className="hidden lg:block ">
              Level 3 – Consistent Learner 🔥
            </CardDescription>
            <CardDescription className="hidden lg:block">
              <p className="text-md">Total Hours: 120 | Streak: 5 days</p>
            </CardDescription>
            {/* <div className="p-2 shadow-sm rounded-sm lg:flex items-center gap-2 hidden">
              <Progress
                value={33}
                className="h-2 mb-1 w-60 bg-slate-200 [&>div]:bg-linear-to-r [&>div]:from-indigo-500 [&>div]:to-purple-600"
              />
              <span className="mb-1">Progress</span>
            </div> */}
          </div>

          <CardAction className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger className="hover:bg-gray-200 shadow-sm p-2 border border-black rounded-lg">
                Log Learnings
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white border-none shadow-sm">
                <DialogHeader>
                  <DialogTitle>Log your Learnings</DialogTitle>
                  <DialogDescription>
                    what did you achieve today?
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">
                      🧠 What did you practice today?
                    </Label>
                    <Input id="name-1" name="name" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">⏱ How long?</Label>
                    <Input type="number" id="username-1" name="username" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">⭐ Rate your day? </Label>
                    <Slider
                      defaultValue={[8]}
                      max={10}
                      min={0}
                      step={1}
                      className="cursor-pointer bg-gray-500 h-2 rounded-lg"
                    />
                    <div className="text-center p-2 shadow-sm rounded-lg">
                      8/10
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">📝 Notes (optional)</Label>
                    <Input type="text" id="username-1" name="username" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button className="cursor-pointer" variant="outline">
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button className="cursor-pointer" type="submit">
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button variant="outline" className="hover:bg-red-200">
              Sign Out
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Topbar;
