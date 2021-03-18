import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import './layout.scss'


const Layout = ({ children }) => {
  const [ className, setClassName ] = useState('')

  useEffect(() => {
    const innerHeight = window.innerHeight/2
    const bioOffsetTop = document.getElementById('bio').offsetTop
    const projectsOffsetTop = document.getElementById('projects').offsetTop
    const educationOffsetTop = document.getElementById('education').offsetTop
    const hobbyOffsetTop = document.getElementById('hobby').offsetTop

    window.onscroll = function() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop

      if(bioOffsetTop - 51 > winScroll && className !== '') setClassName('')
      if(bioOffsetTop - 50 < winScroll && projectsOffsetTop - innerHeight > winScroll && className !== 'bio') setClassName('bio')
      if(projectsOffsetTop - 50 < winScroll && educationOffsetTop - innerHeight  > winScroll && className !== 'projects') setClassName('projects')
      if(educationOffsetTop - 50 < winScroll && hobbyOffsetTop - innerHeight  > winScroll && className !== 'education') setClassName('education')
      if(hobbyOffsetTop - innerHeight < winScroll && className !== 'hobby') setClassName('hobby')
    }

  }, [className])

  return (
    <React.Fragment>
      <Header className={className} id='header'/>
      <div id='main'>
        <main>{children}</main>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
