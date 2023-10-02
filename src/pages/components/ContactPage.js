import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/ContactPage.module.css'
import ContactUsForm from "./ContactUsForm";

const ContactPage =()=>{

    return(
<div> 
<Navbar/>
<section className={styles.HeaderContainer}>
</section>
<section className={styles.ContactContainer}>

<section className={styles.formContainer}>
<h1>Contact Us</h1>
</section>
<ContactUsForm/>
<section className={styles.locationContainer}>


</section>
</section>
<h1></h1></div>

    )
}

export default ContactPage