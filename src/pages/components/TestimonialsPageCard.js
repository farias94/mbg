import react from "react";
import { testimonialData } from "../../../public/testimonialDataComp";
import styles from '../../styles/TestimonialsPageCard.module.css'
const TestimonialsPageCard=({author, text})=>{
    const randomer = Math.random() * Math.floor(2);
let cardName;

if (randomer < 1 ){
    cardName = 'cardOne'}
    else{
        cardName = 'cardTwo'}

return (


    <div  style={{padding: '1rem'}}className={styles[cardName]}>
        <p>{text}</p>
        <h2>{author}</h2>

    </div>
)
}
export default TestimonialsPageCard