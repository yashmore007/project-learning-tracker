import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

// Create custom adapter

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // ← Add this - makes Auth.js edge-compatible
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id; // Store user ID in JWT
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.id as string; // Get ID from JWT token
      }
      return session;
    },
  },
  providers: [Google, GitHub],
  cookies: {
    pkceCodeVerifier: {
      name: "authjs.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },
  trustHost: true,
});
