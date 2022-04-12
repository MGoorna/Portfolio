import styles from '../styles/Home.module.scss'

const BackgroundImage = ({index, technolgies}) => {
//const img = 'img__app__'+index
    return ( 
        <li>
            {/*<div className={styles.img__app__1}></div> */}
            {index && 
            <><div className={styles.number}>0{index+1}</div>
              <div className={styles.pagination}>
                <div key={index} className={styles.pagination__displayed}>0{index+1}</div>
                <div className={styles.pagination__all}>04</div>
              </div>
              <div key={index} className={styles.bg__title}>{technolgies[index]}</div>
            </>}
        </li>
     );
}
 
export default BackgroundImage;