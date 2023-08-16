import React from 'react';
import styles from '../../styles/Projects.module.css';
import ProjectImageContainer from '../components/ProjectsImageContainer'
import { projectData } from '../components/projectDesc';
import ContactUsForm from '../components/ContactUsForm';
import Button from '../components/Button';

const ButtonStyle='ProjectsButton'

const Projects = () => {
  return (
    <div className={styles.containerProj}>
      <h1 className={styles.title}>Our Services</h1>
  <ProjectImageContainer {...projectData}/>
  <Button  ButtonStyle ='testimonialSection'path ='../../components/ProjectsPage' buttonText='View Projects'/>
    </div>
  );
};

export default Projects;
