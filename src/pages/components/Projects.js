import React from 'react';
import styles from '../../styles/Projects.module.css';
import ProjectImageContainer from '../components/ProjectsImageContainer'
import { projectData } from '../../../public/projectDesc';
import ContactUsForm from '../components/ContactUsForm';
import Button from '../components/Button';

const ButtonStyle='ProjectsButton'

const Projects = () => {
  return (
  <div className={styles.masterContainer}>
    <div className={styles.containerProj}>
      <h1 className={styles.title}>OUR SERVICES</h1>
  <ProjectImageContainer {...projectData}/>
  <Button  ButtonStyle ='testimonialSection'path ='../../components/ProjectsPage' buttonText='View Projects'/>
    </div>
    </div>
  );
};

export default Projects;
