import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from './Layout.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import { useRouter } from 'next/router'

const Layout = ({children}) => {
    const router = useRouter()
    const {light, dark} = useContext(ThemeContext);
    const theme = router.pathname == '/budget' ? light : dark;
    
    return ( 
        <>
            <Navbar />        
            <div className={styles.container} style={{background: theme.bg}}>
                <div className={styles.innerContainer}>
                    {children}
                </div>  
            </div>           
            <Footer />
        </>
     );
}
 
export default Layout;