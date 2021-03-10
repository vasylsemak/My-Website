import React, {useContext} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {projects} from './data'
import {projectsRU} from './data-ru'
import {LanguageContext}  from '../pages/index'
import './projects.scss';

const Projects = () => {

  const {state} = useContext(LanguageContext)

  const language = state.language 
  
  const projectsInfo = language === "english" ? projects : projectsRU 
  const stack = language === "english" ? 'stack' : 'стек'
 
  return (
      <div id="projects">
        <img src={require("../images/project.png")} alt="" className="project-img"/>
         {/* <div className="paragraph-title">
            <h3>{"<<<  "}</h3> 
            <h1>  Projects  </h1>
            <h3>{"  >>>"}</h3>
          </div> */}
        <div className="project-container">

          {projectsInfo.map( (el, inx) => (
          
            <div id={el.class} key={el.id}>
            
              <div id={el.img}/>
              <div className="project-details">
              
                <div className="project-links">
                  <a href={el.gitHub} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href={el.link} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              
              <div className="project-description">{el.description}</div>
              <div className="project-description">{el.bulletPoints.one}</div>
              <div className="project-description">{el.bulletPoints.two}</div>
              <div className="project-description">{el.bulletPoints.three}</div>
              
              <div id="project-tools"><span>{stack}: </span>{el.tools}</div>

            </div>
          </div>
        
          ))}

        </div>
      </div>
   
  )
}

export default Projects
