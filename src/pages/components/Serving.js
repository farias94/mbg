import react from "react";
import styles from '../../styles/Serving.module.css';
import Rectangle from './/Rectangle'
function Serving(){

    return(
<div className={styles.Serving}>
<Rectangle/>
    <div className={styles.explainer}>

<p>
Marcus Building Group has been in business for over
24 years. <br/>We've been helping North Jersey residents renovate the home of their dreams.
</p>
</div>
</div>
    )
}
export default Serving;