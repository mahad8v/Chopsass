import { NextRequest, NextResponse } from "next/server";

// GET menu items / POST create item
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "OK" });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "Created" }, { status: 201 });
}
