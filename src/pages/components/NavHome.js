import react from "react";
import Link from "next/link";
import styles from '../../styles/Navbar.module.css'
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
const NavHome =()=>{

    const [navClosed, navOpened] = useState()

    const [Ismobile, setIsMobile] = useState(false)
    
    
    
    
    useEffect (()=>{
    
      const handleResize = ()=>{
        setIsMobile(window.innerWidth < 500);
      }
      
      handleResize()
      window.addEventListener('resize', handleResize)
      return()=> window.removeEventListener('resize', handleResize)
    },[]
    )
    
    
    
    function handleClick(){ 
      navOpened(!navClosed)
      console.log('hello')
    
      }
    
    return(

        <div className={styles[`nav${Ismobile ? 'Mobile' : 'Home'} ] ${ navClosed ? 'Closed' : 'Opened'} `]}>

        
        <Link onClick ={handleClick} className={styles.Home} href="/">

           Home
         </Link >

        <NavLinks navClosed = {navClosed} />
         </div>
    )
}

export default NavHome