import React from 'react'
import {
    GrNext,
    GrPrevious
} from 'react-icons/gr';
import { CourseContainer } from './coursesStyle';
import {
    BsChevronDown,
    BsEye,
    BsFillPersonFill,
    BsStar
} from 'react-icons/bs';

import PcourseImg1 from '../../assets/courses/design.jpg'
import PcourseImg2 from '../../assets/courses/gaming.jpg'
import PcourseImg3 from '../../assets/courses/photo.jpg'
import InstructorImg from '../../assets/instructors/instructor.jpg'

function Courses() {
  return (
    <>
        <CourseContainer>
                <div className='header'>
                    <h1>Most popular Courses</h1>
                    <div className='sliders'>
                        <div className='course-filter'>
                            <h4>Design</h4><BsChevronDown/>
                        </div>
                        <div className='slider-icons'>
                            <div>
                                <GrPrevious/>
                            </div>
                            <div>
                                <GrNext/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='PopularCourses'>
                    <div className='course'>
                        <img src={PcourseImg1} alt=''/>
                        <div className='content'>
                            <div  className='cost'>
                                <h4>web design</h4>
                                <h4>$150</h4>
                            </div>
                            
                            <h2>Launch a career as a web designer and learning more.</h2>
                            <div className='rating-info'>
                                <div>
                                    <div>
                                        < BsFillPersonFill/>
                                        <h4>5.4k</h4>
                                    </div>
                                    <div>
                                         <BsEye/>
                                        <h4>66k</h4>
                                    </div>
                                    <div>
                                         < BsStar/>
                                        <h4>4.5</h4>
                                    </div>
                                </div>
                                <div className="instructor">
                                    <img src={InstructorImg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='course'>
                        <img src={PcourseImg2} alt=''/>
                        <div className='content'>
                            <div  className='cost'>
                                <h4>Gaming/Art</h4>
                                <h4>$170</h4>
                            </div>
                            
                                <h2>The most complete course on the market.</h2>
                            

                            <div className = 'rating-info' >
                                <div>
                                    <div>
                                        < BsFillPersonFill/>
                                        <h4>7.4k</h4>
                                    </div>
                                    <div>
                                         <BsEye/>
                                        <h4>86k</h4>
                                    </div>
                                    <div>
                                         < BsStar/>
                                        <h4>5.5</h4>
                                    </div>
                                </div>
                                <div className="instructor">
                                    <img src={InstructorImg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='course'>
                        <img src={PcourseImg3} alt=''/>
                        <div className='content'>
                            <div  className='cost'>
                                <h4>Photography</h4>
                                <h4>$115</h4>
                            </div>
                            
                                <h2>We are Guide to learning how experts on Photography.</h2>
                            

                            <div className = 'rating-info' >
                                <div>
                                    <div>
                                        < BsFillPersonFill/>
                                        <h4>2.4k</h4>
                                    </div>
                                    <div>
                                        <BsEye/>
                                        <h4>26k</h4>
                                    </div>
                                    <div>
                                        < BsStar/>
                                        <h4>3.5</h4>
                                    </div>
                                </div>
                                <div className="instructor">
                                    <img src={InstructorImg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </CourseContainer>
    </>
  )
}

export default Courses;