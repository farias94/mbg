import React from 'react';
import styles from '../../styles/ProjectImage.module.css';
import Image from 'next/image';
import {projectDesc} from '../../../public/projectDesc';
import ProjectsImageContainer from './ProjectsImageContainer';
import Services1 from '../../../public/Services1.jpg'
import Services2 from '../../../public/Services2.jpg'
import Services3 from '../../../public/Services3.jpg'
import Services4 from '../../../public/Services4.jpg'

const ProjectImage = ({...projectData}) => {

    return (
      
    <div className={styles.container} key={projectData.id}>
      <Image className={styles.img} width={800} height={800} src={projectData.src}alt={projectData.title} />
      <h1 className={styles.ImageTitle}> {projectData.title}</h1>
      <p className={styles.ProjectData}>{projectData.description}</p>
    </div>
  );
};

export default ProjectImage;