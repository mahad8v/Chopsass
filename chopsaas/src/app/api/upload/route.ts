import { NextRequest, NextResponse } from "next/server";

// POST upload logo or menu item image
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "OK" });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "Created" }, { status: 201 });
}
