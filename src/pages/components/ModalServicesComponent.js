import ServicesGridImage from "./ServicesGridImage"
import { servicesImageData } from "../../../public/servicesImageData"
import ServicesGridContainer from "./ServicesGridContainer"

import Image from "next/image"


const ModalServicesComponent =({url, name, id, alt})=>{

    return(
        <div>
          <div className={styles.modalOpen}>
      <h1>{title}</h1>
      <Image 
   className= {styles.modalImages}
    width={800}
     height={800} 
     src={url} 
     alt={alt} 
     key={id}
     /> 
     <p>{text}</p>
    </div>

        </div>
    )
}
export default ModalServicesComponent