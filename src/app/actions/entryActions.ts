"use server";

import { prisma } from "@/lib/prisma";

export async function createEntry(formData) {
  const title = formData.get("title");
  const hours = formData.get("hours");
  const minutes = formData.get("minutes");
  const notes = formData.get("notes");
  const duration = Number(hours * 60 + minutes);

  const entry = await prisma.entry.create({
    data: {
      title,
      duration,
      notes,
    },
  });

  return entry;
}
