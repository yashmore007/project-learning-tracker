"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function createEntry(formData: FormData) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const hours = Number(formData.get("hours") || 0);
  const minutes = Number(formData.get("minutes") || 0);
  const duration = hours * 60 + minutes;

  const titleRaw = formData.get("title");
  const notesRaw = formData.get("notes");

  const title = typeof titleRaw === "string" ? titleRaw : "";
  const notes = typeof notesRaw === "string" ? notesRaw : null;

  const entry = await prisma.entry.create({
    data: {
      title,
      duration,
      notes,
      userId: session.user.id,
    },
  });

  return entry;
}
