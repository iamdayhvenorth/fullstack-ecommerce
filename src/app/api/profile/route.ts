import { getCurrentUser } from "@/actions/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = await getCurrentUser();

  if (!data?.user) {
    return NextResponse.json(
      { message: "Not Authenticated", success: false },
      { status: 401 }
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: data.user.id,
      },
      include: {
        address: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "user not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "user found", success: true, user },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error ocuree while fetching", success: false },
      { status: 500 }
    );
  }
}
