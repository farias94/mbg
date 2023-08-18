import react from "react";
import { servicesImageData } from "../../../public/servicesImageData";
import styles from '../../styles/ServicesGridImageCard.module.css'
import Image from "next/image";
const ServicesGridImageCard=()=>{

    return(
        <div className={styles.container}>

        
            <Image src={prop} alt='image'></Image>
        </div>
    )


    
}

export default ServicesGridImageCard