import React, { useState } from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { myStory } from './data'
import RotateImages from './RotateImages'
import './bio.scss'

const Bio = () => {
  const [ readBttn, setReadBttn ] = useState(true)

  const toggleBttn = () => {
    if(!readBttn) scrollTo('#bio')
    setReadBttn(!readBttn)
  }

  const images = [`a-default-site-image.jpeg`, `sand.jpeg`, `ocean.jpeg`, `oscar.jpeg`, `europe.jpeg`]
  const imgInfo = [`Bukovel, Ukraine`, `Cape Cod, MA`, 'Whales watching, Cape Cod, NY', 'Soho, NY', `Europe`]
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
