import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  try {
    const session = await auth();

    // Check if user is authenticated
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const entries = await prisma.entry.findMany({
      where: {
        userId: session.user.id, // ← Filter by user ID
      },
      select: {
        duration: true,
      },
    });

    return NextResponse.json({ entries });
  } catch (err) {
    console.error("Error fetching entries:", err);
    return NextResponse.json(
      { error: "Failed to fetch dates for streak" },
      { status: 500 }
    );
  }
}
