import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    const { title, description, templateUsed } = await req.json();
    const aiOutput = await prisma.aIOutput.create({
      data: {
        userId,
        title,
        description,
        templateUsed,
      },
    });
    return NextResponse.json({
      message: "AI Output Created Successfully",
      data: aiOutput,
    });
  } catch (e) {
    return new Response(("error occured " + e) as string, { status: 500 });
  }
}
