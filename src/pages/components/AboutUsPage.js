import react from "react";
import styles from '../../styles/AboutUsPage.module.css'
import Navbar from "./Navbar";
import AboutUsImg from '../../../public/AboutUs.png'
import Image from "next/image";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
 const AboutUsPage =()=>{

    return(
        <div className={styles.AboutUsHomePage}>
<Navbar/>
<h1>About Us</h1>

<div className={styles.container}>
    <div className={styles.textContainer}>
   
    <p className={styles.text}>R&S and staff commits to delivering a quality service, but by also ensuring that you, the homeowner, are included throughout the whole process. We personalize each estimate appointment by engaging differently with each one of our clients and working closely to determine the best solution for you and your home.</p>
    <p className={styles.text}> Our ability to connect with the homeowner who chose to partner with us along with the levels
of experience and professionalism our staff brings to the table translates into beautiful and incredible results.</p>
</div>
<div className={styles.ImageContainer}>
<Image src={AboutUsImg} className={styles.img} alt="Image of carpenter cutting wood"/>
</div>
</div>
<ContactSection />

<Footer/>
        </div>
    )
}
export default AboutUsPage