import React from 'react'
import TypeWriter from './TypeWriter'
import './home.scss'


const Home = () => {
  const texts = ['Quadrilingual', 'Tennis fan', 'Cook', 'Traveller', 'Nature lover', 'Hiker']
  const speed = 50
  const endSpeed = 2000

  return (
    <div id='home'>
      <div className='home'>
        	<h1>Vasyl Semak</h1>
          <h3>Full stack software engineer</h3>
          <h6>[‘JavaScript’, ‘React’, ‘Redux’, ‘Express’, ‘Sequelize’, ‘HTML’, ‘CSS’]</h6>
          <TypeWriter texts={texts} speed={speed} endSpeed={endSpeed} />
				</div>
    </div>
  )
}

export default Home
