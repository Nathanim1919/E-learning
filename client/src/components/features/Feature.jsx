import React from 'react'
import {
    FcOnlineSupport,
    FcReadingEbook,
    FcGallery
} from 'react-icons/fc'

import {
    SiCoursera
} from 'react-icons/si';

import { FeatureContainer } from './featureStyle'


function Feature() {
  return (
    <>
    <FeatureContainer>
        <div>
            <div>
                <FcOnlineSupport/>
            </div>
            <h3>Online tutoring</h3>
        </div>
        <div>
            <div>
                <FcGallery/>
            </div>
            <h3>Lifetime Access</h3>
        </div>
        <div>
            <div>
                <FcReadingEbook/>
            </div>
            <h3>Active learning</h3>
        </div>
        <div>
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