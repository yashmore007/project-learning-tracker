"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function SignOutButton() {
  const { status } = useSession();

  if (status === "unauthenticated")
    return <p className="text-center">not signed in!</p>;

  return (
    <div className="flex w-screen justify-center items-center mt-4">
      <button
        className="bg-red-300 p-2 rounded-md shadow-md cursor-pointer"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}
