/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';
import Header from './header'
import './layout.scss'


const Layout = ({ children, language, change }) => {

  const [toTopBttn, setToTopBttn] = useState({id: 'to-top-bttn-hidden', toggle: true})

  const [className, setClassName] = useState('')

  console.log('state', change)


  useEffect(() => {

    const innerHeight = window.innerHeight/2;

    const bioOffsetTop = document.getElementById('bio').offsetTop;
   
    const projectsOffsetTop = document.getElementById('projects').offsetTop;
    
    const educationOffsetTop = document.getElementById('education').offsetTop;
  
    const hobbyOffsetTop = document.getElementById('hobby').offsetTop;
  

    window.onscroll = function(){
   
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if(bioOffsetTop - 51 > winScroll && className !== '') setClassName('')
        
      if(bioOffsetTop - 50  < winScroll && projectsOffsetTop - innerHeight > winScroll && className !== 'bio') setClassName('bio')
      
      if(projectsOffsetTop - 50 < winScroll && educationOffsetTop - innerHeight  > winScroll && className !== 'projects')setClassName('projects')
    

      if(educationOffsetTop - 50 < winScroll && hobbyOffsetTop - innerHeight  > winScroll && className !== 'education')setClassName('education')
        
      if(hobbyOffsetTop - innerHeight < winScroll && className !== 'hobby'){
        setClassName('hobby')
      }
      if(hobbyOffsetTop < winScroll && toTopBttn.toggle) setToTopBttn({id: 'to-top-bttn-shown', toggle: false})
      
      if(winScroll < hobbyOffsetTop && !toTopBttn.toggle) setToTopBttn({id: 'to-top-bttn-hidden', toggle: true})
    
    }
  
  }, [toTopBttn, className])

  const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <Header className={className} language={language} change={change} id='header'/>
        
          <div id='main'>
            <main>{children}</main> 
          </div>

            <div id={toTopBttn.id}>
              <button type='button'  onClick={scrollTop} className='scroll-to-top-bttn'>
                  <FontAwesomeIcon icon={faAngleUp} />
              </button>
          </div> 
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
