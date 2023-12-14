import react, { use } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import styles from '../../styles/NavLinks.module.css'
import { useState, useEffect } from "react";
const NavLinks =( {NavClass})=>{

  /*const [IsMobile, setIsMobile] = useState(false)
  const [menuOpen, menuClosed]= useState(false)

  const handleScroll=()=>{

    window.addEventListener( 'scroll' ,handleScroll )
    return()=>{
      window.scrollY 
    }

    
  }


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

  );*/
  
  
/*function menuClassName (IsMobile, menuOpen){
if (IsMobile){
  return menuOpen ? styles.linksMobileOpen : styles.linksMobileClosed
}
else 
return styles.linksDesktop
}
*/
 
  return(
<div> 


    <div className={NavClass}>

    

    <Link href="../components/AboutUsPage">
      About Us
    </Link>
    <p>{toString({NavClass})}</p>
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