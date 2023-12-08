import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {Work_Sans} from 'next/font/google'
import Serving from './components/Serving'
import Projects from './components/Projects'
import { projectData } from '../../public/projectDesc'
import OurWork from './components/OurWork'
import TestimonialsContainer from './components/TestimonialsContainer'
import { testimonialData } from '../../public/testimonialDataComp'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'

const work_sans = Work_Sans({subsets: ['latin']})
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcus Building Group</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mbglogo.svg" />
        
      </Head>
      <main >
<Navbar/>
<Hero/>
<Serving/>
<Projects {...projectData}/>
<OurWork />        
<ContactSection/>
<Footer/>
             </main>
    </>
  )
}
