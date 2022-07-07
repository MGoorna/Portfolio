import { getSession } from 'next-auth/react';

const chart = ({data}) => {
  return (
    <div>
      <h5>{data}</h5> 
    </div>
  )
}

export default chart


export async function getServerSideProps(context){
  const session = await getSession(context)
  
  if(!session){
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/chart`,
        permanent: false,
      }
    }
  }
  return {
    props:{
      data: session ? 'You are authenticated!' : 'List of free blogs',
    }
  }

}