import react from "react";
import Link from "next/link";
import { linkList } from "../components/LinkList";
import styles from '../../styles/Links.module.css'
import stylesFooter from '../../styles/Footer.module.css'
import { link } from "d3";
const Links =()=>{
    return(
        <div className={styles.linksContainer}>
{console.log(linkList)}
{linkList.map(({url,id,linkName, className}) => (

<Link href={url} className={styles.footerLink}key={id}><p className={styles.footerLink} >{linkName}</p></Link> ))}
</div>
    )

}
export default Links;