import react from "react";
import styles from '../../styles/Testimonials.module.css'

const Testimonials = ({ author, text}) =>{

    return(
        <div className={styles.testimonials} >
            <h1 className={styles.name}>{author} </h1>
        <p className={styles.text} >{text}</p>
        </div>
    )
}
export default Testimonials