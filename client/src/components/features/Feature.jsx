import React,{useEffect} from 'react'
import {
    FcOnlineSupport,
    FcReadingEbook,
    FcGallery
} from 'react-icons/fc'

import {
    SiCoursera
} from 'react-icons/si';

import { FeatureContainer } from './featureStyle'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Feature() {

useEffect(() => {
    Aos.init({
        duration: 300
    })
}, [])
  return (
    <>
    <FeatureContainer>
        <div data-aos="zoom-in">
            <div>
                <FcOnlineSupport/>
            </div>
            <h3>Online tutoring</h3>
        </div>
        <div data-aos="zoom-in">
            <div>
                <FcGallery/>
            </div>
            <h3>Lifetime Access</h3>
        </div>
        <div data-aos="zoom-in">
            <div>
                <FcReadingEbook/>
            </div>
            <h3>Active learning</h3>
        </div>
        <div data-aos="zoom-in">
            <div>
                <SiCoursera/>
            </div>
            <h3>10k Courses</h3>
        </div>
    </FeatureContainer>
    </>
  )
}

export default Feature