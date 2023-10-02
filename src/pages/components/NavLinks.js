import react, { use } from "react";
import Link from "next/link";
import styles from '../../styles/NavLinks.module.css'
import { useState, useEffect } from "react";
const NavLinks =()=>{

  const [IsMobile, setIsMobile] = useState(false)
  const [menuOpen, menuClosed]= useState(false)

  const handleScroll=()=>{

    window.addEventListener( 'scroll' ,handleScroll )
    return()=>{
      window.scrollY 
    }

    
  }


  const handleClick = () =>{

    menuClosed(!menuOpen)
    console.log('hello')
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
  return menuOpen ? styles.linksMobileOpen : styles.linksMobileClosed
}
else 
return styles.linksDesktop
}

 
  return(
<div> 
{IsMobile && <div>
    
  
<p className={styles.menuButtonMobile}onClick={handleClick}>Menu</p>
    </div>}

    <div className={menuClassName(IsMobile, menuOpen)}>

    

    <Link href="../components/AboutUsPage">
      About Us
    </Link>
    <Link href="../">
      Projects
    </Link>
    <Link href="../components/ContactPage">
      Contact Us
    </Link>
    <Link href='../components/ServicesPage'>Services
    </Link>
    <Link href='../components/DoItYourself'>DIY</Link>
  </div>
  </div>
  )
}
export default NavLinks