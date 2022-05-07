import { useState, useEffect } from 'react'
import { getSession, useSession, signIn, Provider } from 'next-auth/react';

const chart = ({data}) => {
  const { data: session, status } = useSession()
    console.log(session, status )

  if(status === 'loading'){
      return <h2>Loading...</h2>
  }
  if(status === 'unauthenticated'){
      return <h2>Access Denied {status}</h2>
  }

  return (
    <div>
      Chart - {data} {status}
    </div>
  )
}


export default chart

export async function getServerSideProps(context){
  const session = await getSession(context)
  if(!session){
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000`,
        permanent: false,
      }
    }
  }
  return {
    props:{
      data: session ? 'List of 100' : 'List of free blogs',
    }
  }

}