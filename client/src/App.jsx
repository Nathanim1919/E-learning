import { useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Feature from './components/features/Feature'
import Courses from './components/popularCourses/Courses'
import TrendingCourses from './components/trendingCourses/Courses'
import About from './components/aboutUs/About'
import Blog from './components/Blogs/Blog'
import Testimonial from './components/testimonials/Testimonial'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import './App.css'
import {
  AiOutlineArrowUp
} from 'react-icons/ai'
import {
  Link
} from 'react-scroll';

function App() {
 

  return (
    <>
     <Header/>
     <Hero/>
     <Feature/>
     <Courses/>
     <TrendingCourses/>
     <About/>
     <Blog/>
     <Testimonial/>
     <Banner/>
     <Footer/>
     <div className='goUP'>
        <Link to="header" spy={true} smooth={true} offset={0} duration={500}><AiOutlineArrowUp/></Link>
     </div>
    </>
  )
}

export default App
