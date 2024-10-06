import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_ID as string,
      clientSecret: process.env.AZURE_SECRET as string,
      tenantId: process.env.AZURE_TENANT_ID as string,
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
};

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
