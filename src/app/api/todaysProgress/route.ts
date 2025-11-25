import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.entry.findMany();

    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong!, Error fetching from server" },
      { status: 500 }
    );
  }
}
