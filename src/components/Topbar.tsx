"use client";
import { useRef, useState } from "react";
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

  const { data: session } = useSession();
  const [error, setError] = useState("");

  console.log(session);

  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("handle submit called");
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
      addEntries(result);
      formRef.current?.reset();
      setOpen(false);
    } catch (err) {
      console.log("Error in submitting the form", err);
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
              <p className="text-md">Total Hours: 120 | Streak: 5 days</p>
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
