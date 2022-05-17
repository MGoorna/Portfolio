import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Button from '../../components/layout/Button';
import useWindowsDiamensions from './@hooks/useWindowsDimensions'
import { FaChartArea } from "react-icons/fa";
import { BsSignpostSplitFill } from "react-icons/bs";
import { SiBitcoincash } from "react-icons/si";
import { RiBankLine } from 'react-icons/ri'; 
import { CgMenuGridO } from 'react-icons/cg';
import { useRouter } from 'next/router'


const Navbar = () => {

    const { width, height } = useWindowsDiamensions()
    const isMobile = width <= 640;
    const { data: session, status } = useSession()
    const { query:{ callbackUrl } } = useRouter();
    const router = useRouter()

    console.log('user', session, status, router.pathname)

    return ( 
        <header className={styles.header}>
                <div className={styles.logo__container}>
                    <h1><Link href="/"><a><RiBankLine/></a></Link></h1>
                </div>
                {isMobile? (
                    <nav className={styles.nav}>
                        <ul className={`${styles.mobile__nav__list} ${styles.nav__list}`}>                       
                            <li>
                                <Link href="/chart"><a><FaChartArea fontSize='20'/>Chart</a></Link>
                            </li>
                            <li>
                                <Link href="/budget"><a><SiBitcoincash fontSize='20'/>Budget</a></Link>
                            </li>                       
                            <li>
                                <Link href="/posts"><a><BsSignpostSplitFill fontSize='20'/>Posts</a></Link>
                            </li>  
                        </ul>
                        <CgMenuGridO color='white' fontSize='40'/>
                    </nav>)
                :
                (<nav className={styles.nav}>
                    <div className={styles.nav_mobile}><a id="nav-toggle" href="#!"><span></span></a></div>

                    <ul className={styles.nav__list}>

                        <li>
                            <Link href="/chart"><a>Chart</a></Link>
                        </li>
                        <li>
                            <Link href="/budget"><a>Budget</a></Link>
                        </li>                       
                        <li>
                            <Link href="/posts"><a>Posts</a></Link>
                            <span className={styles.nav__badge}>New</span>
                        </li>            
                        <li className={styles.stretch}></li>
                    
                    
                        {!session && !status.loading &&(
                            <li>
                            <Link href="/api/auth/signin">
                                <a onClick={e =>{
                                    e.preventDefault()
                                    signIn()//'github'
                                }}>Sign In</a>
                            </Link>
                        </li>
                        )}
                        {session && (
                            <li>
                            <Link href="/api/auth/signout">
                            <a onClick={e =>{
                                e.preventDefault()
                                signOut()
                                }}>Sign Out</a>
                            </Link>
                        </li>
                        )}

                        <li>
                            <Button type="text" 
                                onClick={()=>{console.log('clicked')}} 
                                buttonStyle="btn__warning__solid"
                                buttonSize="btn__small">
                                Register
                            </Button>
                        </li>
                    </ul>
                </nav>)
                }
        </header>
     );
}
 
export default Navbar;