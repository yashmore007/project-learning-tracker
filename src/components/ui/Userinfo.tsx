"use client";
import { useSession } from "next-auth/react";

export default function Userinfo() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="flex flex-col w-screen justify-center items-center mt-12">
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
}
