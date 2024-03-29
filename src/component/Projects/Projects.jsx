import React from "react"
import project1 from './../../img/project1.png'
import project2 from './../../img/project2.png'

import "./Projects.css"

const Projects = ({ hue, saturation, lightness, alpha, filterSaturation }) => {
  return (
    <>
      <div className="Projects">
        <div className="Projects__content">
          <div className="Projects__content__title" style={{ color: `hsl(${hue}, ${saturation}%, ${lightness}%`, textShadow: `0.025em 0.025em hsla(0, 100%, 0%, ${alpha}%)` }}>
            Projects
          </div>

          <div className="Projects__content__item__title">
            Data dashboard with D3 (<i>WIP</i>)
          </div>
          <div class="Projects__content__item__content">
            <img style={{ filter: `hue-rotate(${hue}deg) saturate(${filterSaturation})` }} src={project1} className="Projects__content__item__img" alt="project1" />
            <div class="Projects__content__item__middle">
              <a href="https://red-dune-0c424950f.2.azurestaticapps.net/"><button style={{ background: `hsl(${hue}, ${saturation}%, ${lightness}%` }} class="Projects__content__item__button">Click me!</button></a>
            </div>
          </div>

          <div className="Projects__content__item__title">
            Animated SVG with D3
          </div>
          <div class="Projects__content__item__content">
            <img style={{ filter: `hue-rotate(${hue}deg) saturate(${filterSaturation})` }} src={project2} className="Projects__content__item__img" alt="project2" />
            <div class="Projects__content__item__middle">
              <a href="https://proud-cliff-07e30880f.2.azurestaticapps.net/"><button style={{ background: `hsl(${hue}, ${saturation}%, ${lightness}%` }} class="Projects__content__item__button">Click me!</button></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects
