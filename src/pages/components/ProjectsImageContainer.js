import React from 'react';
import ProjectImage from './ProjectImage';
import styles from '../../styles/ProjectsImageContainer.module.css';
import Image from 'next/image';
import Services1 from '../../../public/Services1.jpg'
import Services2 from '../../../public/Services2.jpg'
import Services3 from '../../../public/Services3.jpg'
import Services4 from '../../../public/Services4.jpg'
import { projectData }  from '../../../public/projectDesc';

const ProjectsImageContainer = ({...projectDesc}) => {


  return (
    
    <div className={styles.container}>
    {projectData.map(({id, src, title, description, image, url} )=>(
    <ProjectImage
     key={id} 
     src={src}
     title={title} 
     description ={description} 
     image={image}
     url={url}/>))}

    </div>
  );
};

export default ProjectsImageContainer;
