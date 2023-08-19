// components/Button.js
import TestimonialsContainer from '../components/TestimonialsContainer';
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Button.module.css'
import Projects from './Projects';
import Router from 'next/router';
import { useRouter } from 'next/router';


const Button = ({ButtonStyle, path, buttonText}) => {
const router  = useRouter();

const handleClick = ()=> {
router.push(path)
}

  return (
    <div className={styles.ProjectsButton}>
      <button className={styles.ProjectsButtonno}>
    <Link href='/'
       >
        {buttonText}
      
    </Link>
    </button>
    </div>
  );
};

export default Button;