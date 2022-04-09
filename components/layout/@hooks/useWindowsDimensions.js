import { useState, useEffect } from 'react'

const useWindowsDiamensions = () => {
    const [diamensions, setDiamensions] = useState({width: undefined,
        height: undefined})

    useEffect(()=>{

        const changeDiamensions = () => {
            setDiamensions({width: window.innerWidth, height: window.innerHeight }) 
            
        }
        changeDiamensions()

        window.addEventListener('resize', changeDiamensions )

        return window.removeEventListener('resize', changeDiamensions )

    },[])

    return diamensions
  }
   
  export default useWindowsDiamensions;