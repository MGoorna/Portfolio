import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github';
import Auth0Provider from "next-auth/providers/auth0";
import EmailProvider from "next-auth/providers/email";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    }),
    /*EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),*/
    
  ],
  /*database: {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
  },*/
})