import { signIn } from "@/auth";

export default function Navbar() {
  return (
    <div className="w-1/2 flex justify-center items-center h-20 bg-blue-300">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          className="cursor-pointer bg-white shadow-md rounded-md"
          type="submit"
        >
          Signin with Google
        </button>
      </form>
    </div>
  );
}
