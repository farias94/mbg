import react from "react";
import ContactUsForm from '../components/ContactUsForm'
import styles from '../../styles/ContactSection.module.css'
const ContactSection = ()=>{

    return(
    <div className={styles.contactUsSectionContainer}>
        <h1>LETS GET TO WORK</h1>
        <p>Get in touch with us to make your dream home a reality!</p>

        <ContactUsForm/>
    </div>
    )
}
export default ContactSection;