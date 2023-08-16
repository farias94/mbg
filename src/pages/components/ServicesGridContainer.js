import react from "react";
import { servicesImageData } from "./servicesImageData";
import Image from "next/image";
import ServicesGridImage from "./ServicesGridImage";
const ServicesGridContainer =({url, name, id, alt} )=>{
console.log(servicesImageData)
    return(
<div>
   <ServicesGridImage 
   
   url={url}
   name={name}
   id={id}
   alt={alt}/>
   
</div>
    );
}

export default ServicesGridContainer