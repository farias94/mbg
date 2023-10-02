import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'
import MarcusLogo from '../../../public/mbglogo.svg'
import Image from 'next/image';
import { use, useEffect, useState } from 'react';
import NavLinks from './NavLinks';
function Navbar() {



  const [navClosed, navOpened] = useState()

  const [IsMobile, setIsMobile] = useState(false)
  
  
  
  

  
  
  



  return (
    <div className={styles.nav}>
      <div className={styles.logoContainer}>
      <div className={styles.logo}>
      <Link className={styles.marcus} href='/'> <Image classname={styles.marcusLogo} src={MarcusLogo} alt="Logo" /></Link>
         <h1 className={styles.logoTitle}> <span className={styles.logoTitleMarcus}>Marcus</span><span className={styles.logoTitleUnder}>Building Group</span></h1> </div>

      </div>

      <div className={styles.navLinkContainer}>



 <NavLinks IsMobile = {IsMobile}  navState={navClosed}/>

 </div>       
    
  
    </div>
  );
}

export default Navbar;
