import react from "react";
import Image from "next/image";
import MarcusLogo from '../../../public/MarcusLogo.svg'
import Links from '../components/Links'
import styles from '../../styles/Footer.module.css'
const Footer =(props)=> {

    return(

        <div className={styles.footerContainer}>
            <Image className={styles.footerLogo}src={MarcusLogo} alt="logo"/>
           <h1>Marcus<br/>Building Group</h1>
            <Links />
        </div>
    )
}

export default Footer;