import { NextResponse, type NextRequest } from "next/server";

import { HARD_CODE_TOKEN, PATH_NAME } from "@/utilities/contans";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token || token?.value !== HARD_CODE_TOKEN) {
    if (req.nextUrl.pathname !== `/${PATH_NAME.LOGIN}`) {
      return NextResponse.redirect(new URL(`/${PATH_NAME.LOGIN}`, req.url));
    }
  } else {
    if (req.nextUrl.pathname === `/${PATH_NAME.LOGIN}`) {
      return NextResponse.redirect(new URL(`/${PATH_NAME.DASHBOARD}`, req.url));
    }

    if (req.nextUrl.pathname === `/${PATH_NAME.HOME}`) {
      return NextResponse.redirect(new URL(`/${PATH_NAME.DASHBOARD}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard/:path*",
    "/events/:path*",
    "/employee/:path*",
    "/products/:path*",
    "/report/:path*",
  ],
};
