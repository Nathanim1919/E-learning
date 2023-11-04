import React,{useEffect} from 'react'
import Button from '../button/Button'
import AboutUsImg from '../../assets/about/about.jpg'
import { AboutContaienr } from './aboutStyle'
import {
  GrShieldSecurity,
  GrSecure,
  GrHelpBook,
} from 'react-icons/gr';

import {
  MdOutlineFreeCancellation
} from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(() => {
    Aos.init({
      duration: 200
    })
  }, [])
  return (
    <>
      <AboutContaienr>
            <div className='getTOKnow' data-aos="fade-right">
              <h1>Get Know About Us</h1>
                <div className='description-text'>
                    <p>You only have to know one thing that, you can learn anything, Anytime, anywhere to do discover yourself. Our content will help you every step, Anytime, anywhere to do discover yourself.</p>
                </div>
                <div className='our-services'>
                    <li><span><GrSecure/></span>Safe & Secured our services and every step of process.</li>
                    <li><span><GrSecure/></span>Secured the process of maintaining in every step.</li>
                    <li><span><MdOutlineFreeCancellation/></span>it's completely risk free to buy a course on discover.</li>
                    <li><span><GrHelpBook/></span>Our content will help you every step</li>
                </div>
                <Button text={'View More'} bgColor={'blue'} color={'#fff'}/>
            </div>
            <div className='aboutImg' data-aos="fade-left">
                <img src={AboutUsImg} alt=''/>
                <div className='sloganBox' data-aos="zoom-in">
                  <div className='icon'>
                    <GrShieldSecurity/>
                  </div>
                    <h3>100% Safe & Secured</h3>
                    <p>Build a course, build a brand, build a businees. Here is what Teachable</p>
                </div>
            </div>
      </AboutContaienr>
    </>
  )
}

export default About