import React from "react";
import Image from "next/image";
import Heroimg from '../../../public/HeroImage2.webp'
import styles from '../../styles/Hero.module.css'
function Hero (){

    return(
<div className={styles.Hero}>
<div className ={styles.HeroTextContainer}>
<h1 className={styles.HeroText}>Building <br/>Futures Together</h1>
<h3>Contracting company for over 20 years, serving northern New Jersey</h3>
</div>

</div>
    )
}
export default Hero