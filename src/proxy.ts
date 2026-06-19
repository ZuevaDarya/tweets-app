import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  console.log("hey");
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile-fake/:path*"],
};
