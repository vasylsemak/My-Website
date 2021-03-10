import * as React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import RotateImages from './RotateImages'
import {hobbies} from './data.js'
import {hobbiesRU} from './data-ru'
import {LanguageContext}  from '../pages/index'
import './hobbies.scss'

const Hobby = () => {

  const {state} = React.useContext(LanguageContext)

  const [readBttn, setReadBttn] = React.useState(true);

  function toggleBttn(){
    if(!readBttn) scrollTo('#hobby')
    setReadBttn(!readBttn)    
  }

  const images = [`gym.jpg`, `centre-court.jpg`,
  `nitto-final.jpg`, `cooking.jpg`]

  const imgInfo = state.language === 'english' ? ['LA Fitness, Baltimore', 'Centre Court in Wimbledon, London', 'ATP Nitto-Final in O2, London', `Cooking shepherd's pie home`] : ['LA Fitness, Балтимор', 'Центральный корт в Уимблдоне, Лондон', 'ATP Nitto-Final в O2, Лондон', 'Пастуший пирог']
  

  const hobbyInfo = state.language === 'english' ? ['Hobbies', hobbies, 'read more...', '...read less'] : ['Xобби', hobbiesRU, 'больше...', '...меньше']
  
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
            {readBttn ? (hobbyInfo[1][0]): hobbyInfo[1].map( el=> el)}
            
              <button type='button' onClick={()=> toggleBttn()}>{readBttn ? hobbyInfo[2] : hobbyInfo[3]}</button>
            </div>       
          </div> 
      </div>
    )
  }
  
  export default Hobby
  