import react from "react";
import styles from '../../styles/ContactUsForm.module.css'

const ContactUsForm =()=>{
    return(
    <div className={styles.container}>
<form method="post"> 
<label for='First Name'> First Name:</label>
    <input type='text'>

    </input>
    </form>
    <form>
    <label for='Last Name'> Last Name:</label>

    <input type = 'text'></input>
    </form>
<form>
    <input className={styles.largeInput} type='text'></input>
</form>
<button class={styles.submitButton}> Submit</button>
</div>
    )
};
export default ContactUsForm;