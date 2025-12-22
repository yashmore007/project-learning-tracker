"use client";
import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { ChartNoAxesColumn } from "lucide-react";
import { createEntry } from "@/app/actions/entryActions";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useEntryStore } from "@/lib/store";

const Topbar = () => {
  const addEntries = useEntryStore((state) => state.addEntry);
  const setTodaysDates = useEntryStore((state) => state.setTodaysDates);

  const [durationInHours, setDurationInHours] = useState<number>(0);
  const [streak, setStreak] = useState(0);

  function calculateCurrentStreak(dateArray: []) {
    // Remove duplicates and sort descending (most recent first)
    const uniqueDates = [...new Set(dateArray)].sort(
      (a, b) => new Date(b).getTime() - new Date(a).getTime()
    );

    if (uniqueDates.length === 0) return 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const mostRecent = new Date(uniqueDates[0]);
    mostRecent.setHours(0, 0, 0, 0);

    // Check if streak is still active (today or yesterday)
    const daysSinceLastActivity = Math.floor(
      (+today - +mostRecent) / (1000 * 60 * 60 * 24)
    );

    if (daysSinceLastActivity > 1) return 0; // Streak broken

    let streak = 1;

    // Count consecutive days backwards
    for (let i = 1; i < uniqueDates.length; i++) {
      const currentDate = new Date(uniqueDates[i]);
      const previousDate = new Date(uniqueDates[i - 1]);

      const diffDays = Math.floor(
        (+previousDate - +currentDate) / (1000 * 60 * 60 * 24)
      );

      if (diffDays === 1) {
        streak++;
      } else {
        break; // Streak ended
      }
    }

    return streak;
  }

  useEffect(() => {
    const fetchDuration = async () => {
      try {
        const res = await fetch("/api/getHours");

        if (!res.ok) {
          throw new Error(`HTTP error status ${res.status}`);
        }

        const json = await res.json();

        interface currObj {
          duration: string;
        }

        const totalOfDurationInMinutes = json.entries.reduce(
          (acc: number, curr: currObj) => {
            return acc + curr.duration;
          },
          0
        );

        const totalOfDurationInHours = totalOfDurationInMinutes / 60;

        setDurationInHours(totalOfDurationInHours);
      } catch (err) {
        console.error("Error fetching duration", err);
      }
    };
    fetchDuration();
  });

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const res = await fetch("/api/streak");

        if (!res.ok) {
          throw new Error(`HTTP error status ${res.status}`);
        }

        const json = await res.json();

        interface entryObj {
          createdAt: string;
        }

        const dateFormat = json.entries.map((entry: entryObj) => {
          return entry.createdAt.split("T")[0];
        });

        const streak = calculateCurrentStreak(dateFormat);

        setStreak(streak);
      } catch (err) {
        console.error("Error feching streak data", err);
      }
    };

    fetchStreak();
  });

  const { data: session } = useSession();
  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}/${month}/${day}`;
    return { date: formattedDate, count: 2 };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const hours = formData.get("hours");
      const minutes = formData.get("minutes");

      if (!hours && !minutes) {
        setError("At least one field is required");
        return;
      }

      const result = await createEntry(formData);

      const correctDateFormat = formatDate(result.createdAt.toString());

      addEntries(result);

      setTodaysDates(correctDateFormat);

      formRef.current?.reset();
      setOpen(false);
    } catch (err) {
      console.error("Error in submitting the form", err);
    }
  };

  return (
    <div className="w-screen sm:w-[80vw]">
      <Card className="rounded-none h-20 border-none">
        <CardHeader>
          <div className="flex items-center gap-9">
            <div className="flex mt-1 gap-4 items-center">
              <Avatar>
                <AvatarImage src={session?.user?.image || ""} />
                <AvatarFallback>
                  {session?.user?.name?.charAt(0) || "CN"}
                </AvatarFallback>
              </Avatar>
              <ChartNoAxesColumn className="sm:hidden" />
              <CardTitle className="hidden sm:block lg:text-lg">
                <p>hey {session?.user?.name?.split(" ")[0]}!</p>
              </CardTitle>
            </div>

            <CardDescription className="hidden lg:block ">
              Level 3 Consistent Learner 🔥
            </CardDescription>
            <CardDescription className="hidden lg:block">
              <p className="text-md">
                Total hours: {!durationInHours ? "Loading" : durationInHours} |
                Streak: {streak} days
              </p>
            </CardDescription>
          </div>

          <CardAction className="flex items-center gap-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="shadow-sm">
                  Log Learnings
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px] bg-white border-none shadow-sm">
                <DialogHeader>
                  <DialogTitle>Log your Learnings</DialogTitle>
                  <DialogDescription>
                    what did you achieve today?
                  </DialogDescription>
                </DialogHeader>

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="title">
                        🧠 What did you practice today?
                      </Label>
                      <Input id="title" name="title" required />
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="hours">⏱ How long?</Label>
                      <div className="flex gap-3">
                        <Input
                          onChange={() => {
                            setError("");
                          }}
                          type="number"
                          id="hours"
                          name="hours"
                          placeholder="hours"
                          min="0"
                        />
                        <Input
                          onChange={() => {
                            setError("");
                          }}
                          type="number"
                          id="minutes"
                          name="minutes"
                          placeholder="minutes"
                          min="0"
                          max="59"
                        />
                      </div>
                      {error && (
                        <p className="text-red-500 text-center">{error}</p>
                      )}
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="notes">📝 Notes (optional)</Label>
                      <Input type="text" id="notes" name="notes" />
                    </div>
                  </div>

                  <DialogFooter className="mt-4">
                    <DialogClose asChild>
                      <Button type="button" variant="outline">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit" variant="outline">
                      Save changes
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <Button
              onClick={() => signOut({ redirectTo: "/" })}
              type="button"
              variant="outline"
              className="hover:bg-red-200"
            >
              Sign Out
            </Button>
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Topbar;
