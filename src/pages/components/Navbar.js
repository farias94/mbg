import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'
import MarcusLogo from '../../../public/mbglogo.svg'
import Image from 'next/image';
import { use, useEffect, useState } from 'react';
import NavLinks from './NavLinks';
function Navbar() {



  const [navClosed, navOpened] = useState()

  const [IsMobile, setIsMobile] = useState(false)
  
  const [menuOpen, menuClosed]= useState(false)

  
  

  
  const handleClick = () =>{

    menuClosed(!menuOpen)
    console.log('fuck' ,'fuck')
  }
    
  useEffect (()=>{
    

    const handleResize = ()=>{
      setIsMobile(window.innerWidth < 800);
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return()=> window.removeEventListener('resize', handleResize)
  },[]

  
  );
  

  function menuClassName (IsMobile, menuOpen){
    if (IsMobile){
      return menuOpen ? `${styles['linksMobileOpen']}` : `${styles['linksMobileClosed']}`
    }
    else 
    return styles.linksDesktop
    }

  return (
    <div className={styles.nav}>
      <div className={styles.logoContainer}>
      <div className={styles.logo}>
      <Link className={styles.marcus} href='/'> <Image onClick={handleClick} classname={styles.marcusLogo} src={MarcusLogo} alt="Logo" /></Link>
         <h1 className={styles.logoTitle}> <span className={styles.logoTitleMarcus}>MARCUS</span><span className={styles.logoTitleUnder}>Building Group</span></h1> </div>

      </div>

      <div className={styles.navLinkContainer}>



 <NavLinks NavClass = {menuClassName}/>
  
 </div>       
    
  
    </div>
  );
}

export default Navbar;
