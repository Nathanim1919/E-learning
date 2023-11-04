import React,{useEffect} from 'react'
import {
    FiSend,
} from 'react-icons/fi';

import {
    BiLogoFacebook,
    BiLogoTwitter,
    BiLogoInstagramAlt,
    BiLogoLinkedinSquare
} from 'react-icons/bi'
import { FooterContainer } from './footerStyle';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {

useEffect(() => {
    Aos.init({
        duration: 500
    })
}, [])

  return (
    <>
    <FooterContainer data-aos="fade-up">
        <div>
            <h2><span>e</span>-learn</h2>
            <p>Top instructors from around the world<br/>teach millions of students.</p>

            <div className='subscribe'>
                <h3>Subscribe Newsletter</h3>
                <form>
                    <input type='text' placeholder='Your email here'/>
                    <button type='submit'><FiSend/></button>
                </form>
            </div>
        </div>

        <div>
            <ul>
            <h3>Information</h3>
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Blog</li>
            </ul>
        </div>

        <div>
            <ul>
            <h3>Helpful Links</h3>
                <li>Students</li>
                <li>Business</li>
                <li>Instructor</li>
            </ul>
        </div>

        <div>
            <ul>
            <h3>Our Service</h3>
                <li>Design</li>
                <li>Study</li>
                <li>Business</li>
                <li>UI/UX</li>
            </ul>
        </div>

        <div>
            <ul>
            <h3>Contact</h3>
                <li>elearn@gmail.com</li>
                <li>+251-942581962</li>
                <div className='socialIcons'>
                    <p>Follow Us:</p>
                    <div className='icons'>
                        <BiLogoTwitter/>
                        <BiLogoLinkedinSquare/>
                        <BiLogoFacebook/>
                        <BiLogoInstagramAlt/>
                    </div>
                </div>
            </ul>
        </div>

        
    </FooterContainer>
    </>
  )
}

export default Footer