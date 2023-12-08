import react from "react";
import { testimonialData } from "../../../public/testimonialDataComp";
import Testimonials from "../components/Testimonials";
import styles from '../../styles/TestimonialsContainer.module.css'
import Button from "../components/Button";

const testimonialPagePath= '/components/TestimonialsPageHome'
const TestimonialsContainer = () =>{
   /* {testimonialData.map(({id, text, key}) => (
        <Testimonials 
        id={id}
        key={key}
        text={text} />))}*/
return(
    <div>
<h1 className={styles.testimonialsHeader}> TESTIMONIALS</h1>

{console.log(testimonialData)}

<div className={styles.testimonialOne}>
    <p>
    Ruben the owner has been very good at his job and in 
    taking direction or whatever. Please hire him. I am a totally real person and not a made up quote 
    for this section.
    </p>
    <h1> - Shari. T</h1>

</div>

 <Button 
 buttonText='View All Testimonials'
 path='../../components/TestimonialsPageHome'/>
</div>

);

}
export default TestimonialsContainer;