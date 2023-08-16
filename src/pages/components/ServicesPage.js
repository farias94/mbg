import react from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../../styles/ServicesPage.module.css'
import ServicesGridContainer from "./ServicesGridContainer";
import ServicesGridImage from '../components/ServicesGridImage'
const ServicesPage =()=>{

    return(
<div>
    <Navbar/>
    <div className={styles.container}>
        <div className={styles.text}>
    <h1>Services</h1>
    <p>We combine years of experience 
        with connections to local 
        professionals to make your dream homes become 
        reality. We offer the following services. Click on an image to learn more about our service</p>
  </div>
   <ServicesGridContainer/>
</div>
<Footer/>
</div>
    )
}
export default ServicesPage