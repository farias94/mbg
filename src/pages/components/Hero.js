import React from "react";
import Image from "next/image";
import Heroimg from '../../../public/HeroImage.png'
import styles from '../../styles/Hero.module.css'
function Hero (){

    return(
<div className={styles.Hero}>
<div>
<h1 className={styles.HeroText}>Building <br/>Futures Together</h1>

</div>

</div>
    )
}
export default Hero