import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube  } from '@fortawesome/free-brands-svg-icons'
import { projects } from './data'
import './projects.scss'

const Projects = () => (
  <div id="projects">
    <img src={require("../images/project.png")} alt="" className="project-img"/>
    <div className="project-container">
      {
        projects.map(el => (
          <div id={el.class} key={el.id}>
            <div id={el.img}/>
            <div className="project-details">
              <div className="project-links">
                <a href={el.gitHub} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                {
                  (el.name === "eBudget") ? (
                    <a href={el.youtube} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  ) : ('')
                }
              </div>
              <div className="project-description">{el.description}</div>
              <div className="project-description">{el.bulletPoints.one}</div>
              <div className="project-description">{el.bulletPoints.two}</div>
              <div className="project-description">{el.bulletPoints.three}</div>
              <div id="project-tools"><span>stack: </span>{el.tools}</div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)

export default Projects
