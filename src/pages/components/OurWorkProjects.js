import react from "react";
import styles from  '../../styles/OurWorkProjects.module.css'
import Image from "next/image";
const OurWorkProjects =()=>{

    return(
        <div className={styles.container}>
            <h1 className={styles.header}> Projects</h1>
            <div className={styles.imageContainer}>
<Image src="" alt="Project2"/>
<Image src="" alt="Project2"/>

</div>
        </div>
    )
}
export default OurWorkProjects