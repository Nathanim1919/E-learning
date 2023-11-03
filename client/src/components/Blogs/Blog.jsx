import React from 'react'
import Button from '../button/Button';

import PcourseImg1 from '../../assets/courses/design.jpg'
import PcourseImg2 from '../../assets/courses/gaming.jpg'
import PcourseImg3 from '../../assets/courses/photo.jpg'
import { PostContainer } from './blogStyle';

function Blog() {
  return (
    <>
    <PostContainer>
        <div>
            <h1>Our Latest Posts</h1>
            <Button text={'More details'} bgColor={'blue'} color={'#fff'}/>
        </div>

        <div className='posts'>
            <div className='post'>
                <img src={PcourseImg1} alt=''/>
                <div className='content'>
                    <h2>Build a course, build a brand, build a businees. Here is what Teachable</h2>
                    <p>22 Jan, 2021 - Article</p>
                </div>
            </div>
            <div className='post'>
                <img src={PcourseImg2} alt=''/>
                <div className='content'>
                    <h2>Build a course, build a brand, build a businees. Here is what Teachable</h2>
                    <p>22 Jan, 2021 - Article</p>
                </div>
            </div>
            <div className='post'>
                <img src={PcourseImg3} alt=''/>
                <div className='content'>
                    <h2>Build a course, build a brand, build a businees. Here is what Teachable</h2>
                    <p>22 Jan, 2021 - Article</p>
                </div>
            </div>
        </div>
    </PostContainer>
    </>
  )
}

export default Blog