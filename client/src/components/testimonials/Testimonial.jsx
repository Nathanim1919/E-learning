import React from 'react';
import InstructorImg from '../../assets/instructors/instructor.jpg'
import { TestimonialContainer } from './testimonialStyle';


function Testimonial() {
  return (
    <>
    <TestimonialContainer >
        <h1>What our students say</h1>
        <div className='testimonials'>
            <div>
                <p>"You only have to know one thing that, you can learn anything, Anytime, anywhere to do discover yourself. Our content will help you every step, Anytime, anywhere to do discover yourself.</p>
                <div className='info'>
                    <div className='pic'>
                        <img src={InstructorImg} alt=''/>
                    </div>
                    <div className="name-info">
                        <h3>Nathanim tadele</h3>
                        <p>Intern at Google</p>
                    </div>
                </div>
            </div>
            <div>
                <p>"You only have to know one thing that, you can learn anything, Anytime, anywhere to do discover yourself. Our content will help you every step, Anytime, anywhere to do discover yourself.</p>
                <div className='info'>
                    <div className='pic'>
                        <img src={InstructorImg} alt=''/>
                    </div>
                    <div className="name-info">
                        <h3>Nathanim tadele</h3>
                        <p>Intern at Google</p>
                    </div>
                </div>
            </div>
            <div>
                <p>"You only have to know one thing that, you can learn anything, Anytime, anywhere to do discover yourself. Our content will help you every step, Anytime, anywhere to do discover yourself.</p>
                <div className='info'>
                    <div className='pic'>
                        <img src={InstructorImg} alt=''/>
                    </div>
                    <div className="name-info">
                        <h3>Nathanim tadele</h3>
                        <p>Intern at Google</p>
                    </div>
                </div>
            </div>
        </div>
    </TestimonialContainer>

    </>
  )
}

export default Testimonial