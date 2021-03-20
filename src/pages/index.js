import * as React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo';
import Home from '../components/home';
import Bio from '../components/bio';
import Projects from '../components/projects';
import Education from '../components/education';
import Hobby from '../components/hobbies'
import Footer from "../components/footer"
import "./styles.scss"

const IndexPage = () => (
  <Layout>
    <SEO title='Vasyl Semak'/>
    <Home/>
    <Bio/>
    <Projects/>
    <Education />
    <Hobby />
    <Footer/>
  </Layout>
)

export default IndexPage
