import * as React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo';
import Home from '../components/home';
import Bio from '../components/bio';
import Projects from '../components/projects';
import Education from '../components/education';
import Hobby from '../components/hobbies'
import Footer from "../components/footer"
import {initialState, CHANGE_LANGUAGE, reducer} from '../components/state'
import "./styles.scss"


export const LanguageContext = React.createContext()

const IndexPage = () => {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  const action = {
    languageChanged: (changed) => dispatch({type: CHANGE_LANGUAGE, changed: changed})
  }

  return (
    <LanguageContext.Provider value={{state: state, change: action}} >
        <Layout language={state.language} change={action}>
            <SEO title='Vasyl Semak'/>
            <Home/>
            <Bio/>
            <Projects/>
            <Education />
            <Hobby />
            <Footer/>
        </Layout>
    </LanguageContext.Provider>
  )
}

export default IndexPage
