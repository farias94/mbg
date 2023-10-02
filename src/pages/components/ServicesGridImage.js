import react, { useState } from "react";
import Image from "next/image";
import { servicesImageData } from "../../../public/servicesImageData";
import { useEffect } from "react";
import styles from '../../styles/ServicesGridImage.module.css'


/**
 * need to add a hook that gets all the data from the clicked image, including props, and displays a vopy of it to be overlayed
 * on top of all the other elements
 * another hook that applies a style rule to all the other elements on the page that reduces the opacity by 0.6 when the first hook is active
 * finally the unhook state when the user clicks outside of the div.
 *
 */
const ServicesGridImage =()=>{

{/*
****** modal component to be implemented for later. No time right now!

const [selectedItem, setSelectedItem] = useState(null)
const [isModalOpen, setIsModalOpen] = useState(false)

const openModal = (id)=>{
  setSelectedItem(id)
  setIsModalOpen(true)
}

*/}
  
  console.log(servicesImageData.url)
    return(
    
        <div className={styles.container}>

        
            {servicesImageData.map(({url, text,title, id, alt} ,index) =>
   ( 
    <div className={styles.totalContainer}  key={index}>
    {/*onClick={(openModal(url,text, title,id,alt))} */}
    <h1>{title}</h1>
    <div className= {styles.imageContainer} key={id + 1}>
   <Image 
   className= {styles.images}
    width={800}
     height={800} 
     src={url} 
     alt={alt} 
     key={id}
     /> 

   </div>
{/*

******modal component to be implemented for later. No time right now!

   {isModal && selectedItem && (
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
   )}
    */}
   </div>
   ))}
  
             </div>
    )
}

export default ServicesGridImage