import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import BackgroundImage from './BackgroundImage'



export default function Home() {
  const [index, setIndex] = useState(0)
  const technolgies = ['1','chartjs','React context, useReducer, Bootstrap', 'css grid, custom button']
  const cursorRef = useRef();

  const handleMouseMove = e => {
    cursorRef.current.style.top  = e.clientY +'px';
    cursorRef.current.style.left = e.clientX +'px';
  }

  useEffect( () => {
    document.body.addEventListener('mousemove', handleMouseMove)
    return function cleacup(){
      document.body.removeEventListener('mousemove', handleMouseMove)
      //cancelAnimationFrame(cursorRef.current)
    }
  }, [])

  const handleMouseEnter = e => {
    const target = e.target.tabIndex;
    //console.log('index', target)
    document.querySelectorAll(`[tabIndex]`)[target].style.setProperty("opacity", '1')
    setIndex(target)
  }

  const handleMouseLeave = e => {
    const target = e.target.tabIndex;
    document.querySelectorAll(`[tabIndex]`)[target].style.setProperty("opacity", '0.5')
  }

  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="keywords" content="Portfolio" />
      </Head>      
      <main>
        <ul id="imageSection" className={styles.image__section}>
          <BackgroundImage index={index} technolgies={technolgies}/>
        </ul>
        <ul id="menu" className={styles.menu}>
          <li><Link href="/table">
          <a className={styles.hover__underline__animation} tabIndex='0'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>React table</a></Link></li>                  
          <li><Link href="/chart"><a
            className={styles.hover__underline__animation} tabIndex='1'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Chart</a></Link></li>
          <li><Link href="/budget">
            <a className={styles.hover__underline__animation} tabIndex='2'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Budget</a></Link></li>
          <li><Link href="/posts"><a
            className={styles.hover__underline__animation} tabIndex='3'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Posts</a></Link></li>
        </ul>
      </main> 
      <div ref={cursorRef} className={styles.cursor}></div>  
    </>
  )
}
