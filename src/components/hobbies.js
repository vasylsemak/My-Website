import * as React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import RotateImages from './RotateImages'
import { hobbies } from './data.js'
import './hobbies.scss'

const Hobby = () => {
  const [readBttn, setReadBttn] = React.useState(true);

  function toggleBttn() {
    if(!readBttn) scrollTo('#hobby')
    setReadBttn(!readBttn)
  }

  const images = [ 'egypt.jpeg', 'colosseum.jpeg', 'niagara_falls.jpeg', 'horse.jpeg', 'pantheon.jpeg', 'grand_canyon.jpeg', 'boat.jpeg', 'fountain.jpeg' ]

  const imgInfo = [ 'Cairo, Egypt', 'Rome, Italy', 'Niagara Falls, NY', `Alstede Farms, NJ`, 'Rome, Italy', 'Grand Canyon National Park, AZ', 'Poconos, NY' ]


  const hobbyInfo = [ 'Hobbies', hobbies, 'read more...', '...read less' ]

    return (
      <div id='hobby'>
          <div className='paragraph-title'>
            <h3>{'<<<  '}</h3>
            <h1>  {hobbyInfo[0]}  </h1>
            <h3>{'  >>>'}</h3>
          </div>
          <div id='hobby-container'>
            <RotateImages images={images} imgInfo={imgInfo} anime={'fade'} />
            <div id='hobby-story'>
              {readBttn ? (hobbyInfo[1][0]): hobbyInfo[1].map(el=> el)}
              <button type='button' onClick={()=> toggleBttn()}>{readBttn ? hobbyInfo[2] : hobbyInfo[3]}</button>
            </div>
          </div>
      </div>
    )
  }

  export default Hobby
