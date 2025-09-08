import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Definindo a estrutura da nossa sessão
interface SessionData {
  isAdmin: boolean;
}

export async function POST(request: Request) {
  // Configurações da sessão
  const session = await getIronSession<SessionData>(await cookies(), {
    // <-- CORREÇÃO: Removido o 'await' de cookies()
    password: process.env.SESSION_SECRET as string,
    cookieName: "primor-admin-session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });

  // Pega a senha enviada pelo formulário de login
  const { password } = await request.json();

  // Verifica se a senha enviada é a mesma que definimos no .env.local
  if (password === process.env.ADMIN_PASSWORD) {
    // Se a senha estiver correta, marcamos o usuário como admin na sessão
    session.isAdmin = true;
    await session.save(); // Salva a sessão no cookie
    return NextResponse.json({ ok: true });
  } else {
    // Se a senha estiver errada, retornamos um erro
    session.isAdmin = false;
    await session.save();
    return new NextResponse(JSON.stringify({ error: "Senha inválida." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
