import { ProxyConfig, type NextRequest } from "next/server";
import { updateSession } from "./database/middleware";

export async function proxy(request: NextRequest) {
  console.log("Proxy rodando:", request.nextUrl.pathname);

  return await updateSession(request);
}

export const config: ProxyConfig = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};
