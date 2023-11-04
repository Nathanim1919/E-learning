import React from 'react'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import Button from '../button/Button'
import { HeaderContainer } from './headerStyle'
import {AiOutlineClose} from 'react-icons/ai';

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
            <li>About</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Reviews</li>
            <li>Instructor</li>

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
