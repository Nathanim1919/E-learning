import React,{useEffect} from 'react'
import Button from '../button/Button'
import heroImage from '../../assets/hero/hero.png'
import { HeroConatiner } from './heroStyle'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    FcReadingEbook,
} from 'react-icons/fc'


function Hero() {

useEffect(() => {
    Aos.init({
        duration: 500
    })
}, [])
  return (
   <>
      <HeroConatiner>
        <div className='hero-text' data-aos="zoom-in">
            <h1>Move beyond<br/> the limitations of<br/> e-Learning.</h1>
            <p>Anytime, anywhere to do discover yourself.</p>
            <div>
                <Button text={'Get Started'} bgColor={'#21279B'} color={'#fff'}/>
                <Button text={'Become an instructor?'} bgColor={'transparent'} color={'#333'}/>
            </div>
        </div>

        <div div className = 'imageContainer' >

                <div data-aos="fade-left" className='rightBox'>
                    <span>New</span>
                    <p>Get 20% off in every course.</p>
                </div>

                <div data-aos="fade-right" className='leftBox'>
                    <p>Largest collection in every courses.</p>
                    <p>Expert instructors.</p>
                </div>
                <div data-aos="zoom-in" className='bottomBox'>
                   <div className='icon'>
                        < FcReadingEbook/>
                   </div>
                   <p>Total Students</p>
                   <h2>15K</h2>
                </div>

                <div className='dotted-circle' data-aos="zoom-in">
                    <div className='orange-circle'>
                        <div className='innerCircle'>

                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className='hero-image'>
                    <img src={heroImage} alt=''/>
                </div>
        </div>
      </HeroConatiner>  
   </>
  )
}

export default Hero