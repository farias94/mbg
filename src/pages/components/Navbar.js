import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'
import MarcusLogo from '../../../public/MarcusLogo.svg'
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
        <Image classname={styles.marcusLogo} src={MarcusLogo} alt="Logo" />
              </div>

     <Link className={styles.marcus} href='/'> <h1><span className={styles.marcus}>Marcus</span><br/>Building Group</h1></Link>
      </div>

      <div className={styles.navLinkContainer}>



 <NavLinks IsMobile = {IsMobile}  navState={navClosed}/>

 </div>       
    
  
    </div>
  );
}

export default Navbar;
