import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="w-screen flex justify-center sm:justify-end items-center h-20 bg-blue-300">
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}
      >
        <Button
          className="cursor-pointer mr-6 bg-white shadow-md rounded-md"
          type="submit"
        >
          Signin with Google
        </Button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/dashboard" });
        }}
      >
        <button
          className="cursor-pointer p-2 mr-6 bg-white shadow-md rounded-md"
          type="submit"
        >
          Signin with GitHub
        </button>
      </form>
    </div>
  );
}
