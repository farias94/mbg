import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'
import MarcusLogo from '../../../public/mbglogo.svg'
import Image from 'next/image';
import { use, useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import DropDown from '../../../public/dropdownicon.svg';
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
      return menuOpen ? styles.linksMobileOpen : styles.linksMobileClosed;
    }
    else 
    return styles.linksDesktop
    }

  return (
    <div className={styles.nav}>
      <div className={styles.logoContainer}>
      <div className={styles.logo}>

    <div className={styles.logoImage}> <Image onClick={handleClick} className={styles.marcusLogo} src={MarcusLogo} alt="Logo" /></div>
         <h1 className={styles.logoTitle}> <span className={styles.logoTitleMarcus}>MARCUS</span><span className={styles.logoTitleUnder}>Building Group</span></h1> </div>

      </div>




 <NavLinks NavClass = {menuClassName(IsMobile, menuOpen)}/>
 {IsMobile && 
 <div className={styles.ArrowContainer}> 
         <Image className={menuOpen ? styles.dropDownOpen : styles.dropDownClosed}alt='' src={DropDown} onClick={handleClick} ></Image>
       </div>
        }
    
  
    </div>
  );
}

export default Navbar;
