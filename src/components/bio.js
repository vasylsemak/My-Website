import React, { useState } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { myStory } from './data'
import RotateImages from './RotateImages'
import './bio.scss'

const Bio = () => {
  const [ readBttn, setReadBttn ] = useState(true);

  const toggleBttn = () => {
    if(!readBttn) scrollTo('#bio')
    setReadBttn(!readBttn)
  }

  const images = [`virtual-grad.png`, `hyde-park.jpg`, `ala-archa.png`, `parade.png`, `a-default-site-image.jpg`]
  const imgInfo = [`Fullstack virtual graduation, South Orange`, `Hyde Park, London`, 'Ala-Archa Mountain, Kyrgyzstan', 'Red Hook, NY']
  const bioInfo = ['Biography', myStory, 'read more...', '...read less']

  return (
    <div id='bio'>
      <div className='paragraph-title'>
        <h3>{'<<<  '}</h3>
        <h1>{bioInfo[0]}</h1>
        <h3>{'  >>>'}</h3>
      </div>
      <div id='bio-container'>
        <RotateImages images={images} imgInfo={imgInfo} anime={'fade'}/>
        <div id='my-story'>
          {readBttn ? bioInfo[1][0] : bioInfo[1].map(el => el)}
          <button type='button' onClick={()=> toggleBttn()}>{readBttn ? bioInfo[2] : bioInfo[3]}</button>
        </div>
      </div>
    </div>
  )
}

export default Bio
