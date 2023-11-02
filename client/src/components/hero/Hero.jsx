import React from 'react'
import Button from '../button/Button'
import heroImage from '../../assets/hero/hero.png'
import { HeroConatiner } from './heroStyle'


function Hero() {
  return (
   <>
      <HeroConatiner>
        <div className='hero-text'>
            <h1>Move beyond<br/> the limitations of<br/> e-Learning.</h1>
            <p>Anytime, anywhere to do discover yourself.</p>
            <div>
                <Button text={'Get Started'} bgColor={'#21279B'} color={'#fff'}/>
                <Button text={'Become an instructor?'} bgColor={'transparent'} color={'#333'}/>
            </div>
        </div>

        <div div className = 'imageContainer' >
                <div className='dotted-circle'>
                    <div className='orange-circle'>
                        <div className='innerCircle'>

                        </div>
                    </div>
                </div>

                <div className='hero-image'>
                    <img src={heroImage} alt=''/>
                </div>
        </div>
      </HeroConatiner>  
   </>
  )
}

export default Hero