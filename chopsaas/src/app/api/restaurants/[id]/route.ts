import { NextRequest, NextResponse } from "next/server";

// GET / PUT / DELETE restaurant by id
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "OK" });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "Created" }, { status: 201 });
}
