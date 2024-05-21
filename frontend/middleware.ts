import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/home","/workspace"];

// This function can be marked `async` if using `await` inside

export function middleware(request: NextRequest) {
  if( request.cookies.has("jwt")){
        if(protectedRoutes.includes(request.nextUrl.pathname) || request.nextUrl.pathname.startsWith("/workspace")){
          return NextResponse.next();
        }else{
          return NextResponse.redirect(new URL("/home", request.nextUrl));
        }
    }else{
        if(request.nextUrl.pathname === "/"){
          return NextResponse.next();
        }else {
          return NextResponse.redirect(new URL("/", request.nextUrl));
        }
    }
  }


export const config = {
  matcher: ["/","/home","/workspace", "/workspace/:path*"],
};
