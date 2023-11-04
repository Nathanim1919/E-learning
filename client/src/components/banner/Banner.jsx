import React, {useEffect} from 'react'
import Button from '../button/Button'
import { BannerContainer } from './bannerStyle'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Banner() {
  useEffect(() => {
    Aos.init({
      duration: 500
    })
  }, [])
  return (
    <>
    <BannerContainer>
      <div div data-aos = "zoom-out" >
        <h1>Do you want to be an<br/>instructor?</h1>
        <div>
        <Button text={'join us'} bgColor={'blue'} color={'#fff'}/>
        </div>
      </div>
    </BannerContainer>
    </>
  )
}

export default Banner