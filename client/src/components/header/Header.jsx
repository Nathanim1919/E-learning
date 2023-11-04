import React from 'react'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import Button from '../button/Button'
import { HeaderContainer } from './headerStyle'
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-scroll';

function Header () {
  
    
  return (
    <>
      <HeaderContainer>
        <div className='list-items'>
          <div>
            <h2>
              <span>e</span>-learn.
            </h2>
          </div>

          <ul>
            <div className='close-icon'>
                <AiOutlineClose/>
            </div>
            <li>
              <Link to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
            </li>
            <li>
              <Link to="courses" spy={true} smooth={true} offset={0} duration={500}>Courses</Link>
            </li>
            <li>
              <Link to="blog" spy={true} smooth={true} offset={0} duration={500}>Blog</Link>
            </li>
            <li>
              <Link to="reviews" spy={true} smooth={true} offset={0} duration={500}>Reviews</Link>
            </li>
            <li>
              <Link to="instructor" spy={true} smooth={true} offset={0} duration={500}>Instructor</Link>
            </li>
          </ul>
        </div>

        <div className='call-icons'>
          <div>
            <div> <FiSearch /></div>
            <div>
               <span>3</span> 
               <FiShoppingCart />
            </div>
          </div>

          <div>
            <Button text='Sign in' color='#333' bgColor='transparent' />
            <Button text='Register' color='#333' bgColor='orange' />
          </div>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header
