import * as React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import Burger from './Burger'
import './header.scss'


export default function Header({className, language, change}) {

  const [burger, setBurger] = React.useState(true)

  function onClick(idName){
    if(!burger)setBurger(true)
    if(idName !== '') scrollTo(idName)
  }

  const tongueBttn = language === 'english' ? {en: 'EN', ru: 'RU'} : {en: 'анг', ru: 'рус'}

  const changeLanguge = (language) => {
    change.languageChanged(language)
  }

  const languages = (tongue) => (
    <div  className={tongue}>
        <button type='button' id='top-flag-icon'  onClick={() => changeLanguge('english')}>
          <div>{tongueBttn.en}</div>
          <img alt='' src={`amer-flag.jpg`}/>
        </button>

      <button type='button' id='bottom-flag-icon' onClick={() => changeLanguge('russian')}>
        <div>{tongueBttn.ru}</div>
        <img alt='' src={`russ-flag.jpg`} id='ru-flag-icon'/>
      </button>
    </div>
  )

  const links = language === 'english' ? ['Bio', 'Projects', 'Education', 'Hobbies'] : ['Био', 'Проекты', 'Образование', 'Xобби']

  const idNames = [{id: 1, link: '#bio'}, {id: 2, link: '#projects'}, {id: 3, link: '#education'}, {id: 4, link: '#hobby'}]

  return (
      <div id='nav-bar'>
        <div id='nav-left'>
          <div id='nav-logo'>

            <Burger setBurger={setBurger} burger={burger}/>

            <button onClick={() => onClick('#home')} id='logo'>VS</button>
          </div>
          <div id='divider'/>
        </div>
        <div id={burger ? 'nav-links' : 'nav-links-mobile'}>

          {links.map((el, i)=> {

            const classname = idNames[i].link === '#' + className ? 'link-offsetTop' : 'nothing'

            return <button key={idNames[i].id} type='button' className={classname} onClick={() => onClick(idNames[i].link)}>{el}</button>

          })}

          {languages('tongue')}

        </div>

        {languages('mobile-tongue')}

    </div>
  )
}
