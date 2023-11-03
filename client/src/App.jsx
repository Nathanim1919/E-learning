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
    </>
  )
}

export default App
