import react from "react";
import Link from "next/link";
import { linkList } from "../../../public/LinkList";
import styles from '../../styles/Links.module.css'
import stylesFooter from '../../styles/Footer.module.css'
const Links =()=>{
    return(
        <div className={styles.linksContainer}>
{console.log(linkList)}
{linkList.map(({url,id, linkName }) => (

<Link href='/' className={styles.footerLink}key={id}><p className={styles.footerLink} >{linkName}</p></Link> ))}
</div>
    )

}
export default Links;