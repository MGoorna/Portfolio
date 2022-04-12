import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import { BudgetProvider } from '../pages/context/BudgetContext'
import { ThemeContextProvider } from '../pages/context/ThemeContext'


function MyApp({ Component, pageProps }) {

    return(
      <>
        <Head>
          <title>Portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeContextProvider>
          <BudgetProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout> 
          </BudgetProvider>
        </ThemeContextProvider>
      </>
    ) 
}

export default MyApp
