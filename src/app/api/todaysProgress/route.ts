import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  try {
    // Get the logged-in user's session
    const session = await auth();

    // Check if user is authenticated
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch only entries belonging to this user
    const entries = await prisma.entry.findMany({
      where: {
        userId: session.user.id, // ← Filter by user ID
      },
      orderBy: {
        createdAt: "desc", // Newest first
      },
    });

    return NextResponse.json({ entries }); // Return array directly
  } catch (err) {
    console.error("Error fetching entries:", err);
    return NextResponse.json(
      { error: "Failed to fetch entries" },
      { status: 500 }
    );
  }
}
