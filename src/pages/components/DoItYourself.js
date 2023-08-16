import react from "react";
import styles from '../../styles/DoItYourself.module.css'
import DIYHero from '../../../public/DIYHero.jpg'
import Image from "next/image";
import Navbar from "./Navbar";
const DoItYourself=()=>{

    return(
<div>
    <Navbar/>
<div className={styles.container}>
   <h1>DIY Home Improvements</h1> 


    </div>
</div>
    )
}
export default DoItYourself