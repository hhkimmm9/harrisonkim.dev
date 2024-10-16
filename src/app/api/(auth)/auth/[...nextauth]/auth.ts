import { NextAuthOptions } from 'next-auth'
// https://github.com/vercel/next.js/discussions/50511
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'hhkimmm9'
        },
        password: {
          label: 'Password',
          type: 'password',
        }
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.BASE_URL}/api/auth/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        const user = await res.json()

        if (res.ok && user) {
          return user
        }
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token }) {
      return token
    },
    async session({ session }) {
      return session
    }
  },
}

export default authOptions