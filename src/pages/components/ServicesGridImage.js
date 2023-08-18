import react, { useState } from "react";
import Image from "next/image";
import { servicesImageData } from "../../../public/servicesImageData";
import { useEffect } from "react";
import styles from '../../styles/ServicesGridImage.module.css'



const ServicesGridImage =()=>{

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const [selectedImage, setSelectedimage]= useState(null)

const handleClick =(index) => {


setExpandedIndex (index === expandedIndex ? -1 : index);

};

const handleImageClick  = (image)=>{

  setSelectedimage
}


const gridTemplateAreas = [
    "image1 image2 image3 image4",
    "image5 image6 image7 image8",
    "image9 image10 image11 image12",
    "image13 image14 image15 image16",
  ];

  const gridTemplateAreasExpanded = [
    "image1 image1 image1 image1",
    "image2 image3 image4 image1",
    "image5 image6 image7 image8",
    "image9 image10 image11 image12",
    "image13 image14 image15 image16",
  ];
  
  console.log(servicesImageData.url)
    return(
    
        <div className={styles.container}>

        
            {servicesImageData.map(({url, text,title, id, alt} ,index) =>
   ( 
    <div className={styles.totalContainer} key={index}>
    <h1>{title}</h1>
    <div className={`${styles.imageContainer} 
                        ${expandedIndex === index ? styles.expanded: ''}`} key={id + 1}
                      
                            >
   <Image 
   className= {styles.images}
    width={800}
     height={800} 
     src={url} 
     alt={alt} 
     key={id}
     onClick={()=>handleImageClick( )}/> 

   </div>
   </div>
   ))}
       
             </div>
    )
}

export default ServicesGridImage