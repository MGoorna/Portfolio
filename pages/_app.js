import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import { BudgetProvider } from '../context/BudgetContext'
import { ThemeContextProvider } from '../context/ThemeContext'
//import { AuthContextProvider } from '../context/authContext'
import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps: {session, ...pageProps} }) {

    return(
      <>
        <Head>
          <title>Portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <SessionProvider session={session}> 
          {/*<AuthContextProvider>*/}
            <ThemeContextProvider>
              <BudgetProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout> 
              </BudgetProvider>
            </ThemeContextProvider>
          {/*</AuthContextProvider>*/}
        </SessionProvider>
      </>
    ) 
}

export default MyApp
