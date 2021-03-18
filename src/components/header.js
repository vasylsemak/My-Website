import * as React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import Burger from './Burger'
import './header.scss'


export default function Header({ className }) {
  const [ burger, setBurger ] = React.useState(true)

  function onClick(idName) {
    if(!burger) setBurger(true)
    if(idName !== '') scrollTo(idName)
  }

  const links = [ 'Bio', 'Projects', 'Education', 'Hobbies']

  const idNames = [
    {id: 1, link: '#bio'},
    {id: 2, link: '#projects'},
    {id: 3, link: '#education'},
    {id: 4, link: '#hobby'}
  ]

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
        {
          links.map((el, i) => {
            const classname = idNames[i].link === '#' + className
              ? 'link-offsetTop' : 'nothing'

            return <button key={idNames[i].id} type='button'
              className={classname} onClick={() => onClick(idNames[i].link)}
            >{el}</button>
          })
        }
      </div>
    </div>
  )
}
