import react from "react";
import MeetingImg from '../../../public/Meeting-100.jpg'
import styles from '../../styles/TestimonialsPageHome.module.css'
import Navbar from "../components/Navbar";
import { testimonialData } from "../../../public/testimonialDataComp";
import TestimonialsPageCard from "./TestimonialsPageCard";
import ContactSection from "./ContactSection";
import ContactUsForm from "./ContactUsForm";
import Footer from "./Footer";

const TestimonialsPageHome =()=>{

    return(
<div>
<Navbar/>
<h1 className={styles.Header}>Testimonials</h1>


<div className={styles.container}>

{testimonialData.map (({author, id, text})=>(
    <TestimonialsPageCard  key={id}text={text} author={author} id={id} />))}
</div>
<ContactSection/>
<Footer style = 'footerWhite'/>
</div>
    )
}

export default TestimonialsPageHome