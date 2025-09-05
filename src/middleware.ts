import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionData {
  isAdmin: boolean;
}

export async function middleware(request: NextRequest) {
  // Pega a sessão do cookie do usuário
  const session = await getIronSession<SessionData>(await cookies(), {
    // <-- CORREÇÃO AQUI
    password: process.env.SESSION_SECRET as string,
    cookieName: "primor-admin-session",
  });

  // Se o usuário não estiver logado como admin (isAdmin não é true)
  if (!session.isAdmin) {
    // Redireciona para a página de login
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Se estiver logado, permite que ele acesse a página
  return NextResponse.next();
}

// O matcher define quais rotas serão protegidas por este middleware
export const config = {
  matcher: "/admin/dashboard/:path*", // Protege /admin/dashboard e qualquer página dentro dela
};
