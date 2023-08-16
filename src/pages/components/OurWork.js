import react from "react";
import styles from '../../styles/OurWork.module.css'
import TestimonialsContainer from "../components/TestimonialsContainer";
import { testimonialData } from '../components/testimonialDataComp'
import OurWorkProjects from "./OurWorkProjects";
const WorkSection =()=>{
return(

    <div className={styles.container}>
<TestimonialsContainer />

    </div>
)
}

export default WorkSection