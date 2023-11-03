import React from 'react'
import Button from '../button/Button'
import { BannerContainer } from './bannerStyle'

function Banner() {
  return (
    <>
    <BannerContainer>
        <h1>Do you want to be an<br/>instructor?</h1>
        <Button text={'join us'} bgColor={'blue'} color={'#fff'}/>
    </BannerContainer>
    </>
  )
}

export default Banner