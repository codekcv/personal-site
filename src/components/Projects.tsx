import * as React from "react"
import styled from "styled-components"

const Container = styled.div``

const projects = [
  {
    title: "ChristianVillamin.github.io",
    description: "My personal portfolio website.",
    technologies: ["TypeScript", "Gatsby", "React", "GraphQL"],
    code: "https://github.com/ChristianVillamin/ChristianVillamin.github.io",
    demo: "http://christianvillamin.github.io",
  },
  {
    title: "listerNote",
    description:
      "A Kanban style note organizer. You can use boards, lists, and cards.",
    technologies: ["TypeScript", "React", "Redux", "Hooks"],
    code: "https://github.com/ChristianVillamin/lister",
    demo: "https://listernote.netlify.com/",
  },
  {
    title: "Anonymous Message Board",
    description: "A full stack application message board.",
    technologies: ["ES6+", "Node", "Express", "MongoDB", "Chai", "Mocha"],
    code:
      "https://github.com/ChristianVillamin/boilerplate-project-messageboard",
    demo: "https://cv-board.glitch.me",
  },
  {
    title: "Stock Price Checker",
    description: "Fetches from an API to get latest stock prices.",
    technologies: ["ES6+", "Node", "Express", "MongoDB", "Axios"],
    code:
      "https://github.com/ChristianVillamin/boilerplate-project-stockchecker",
    demo: "https://cv-stock.glitch.me/",
  },

  {
    title: "Tribute Page",
    description: "A tribute to Walter White from Breaking Bad.",
    technologies: ["HTML5", "CSS3", "Flexbox", "Grid"],
    code: "https://codepen.io/ChristianVillamin/pen/wLwQGP",
    demo: "https://codepen.io/ChristianVillamin/full/wLwQGP",
  },
  {
    title: "Issue Tracker",
    description: "Submit issues of projects.",
    technologies: ["MongoDB", "Node", "Helmet", "Unit Testing"],
    code:
      "https://github.com/ChristianVillamin/boilerplate-project-issuetracker",
    demo: "https://cv-tracker.glitch.me/",
  },
  {
    title: "A URL Shorterner Microservice.",
    description: "Transforms long links into a short one.",
    technologies: ["ES6+", "MongoDB", "Node", "Express"],
    code:
      "https://github.com/ChristianVillamin/boilerplate-project-urlshortener",
    demo: "http://cv-url.glitch.me/",
  },

  {
    title: "Treemap Diagram",
    description: "A data visualization, using treemap design.",
    technologies: ["JavaScript", "D3"],
    code: "https://codepen.io/ChristianVillamin/pen/rEgVPp",
    demo: "https://codepen.io/ChristianVillamin/full/rEgVPp",
  },
  {
    title: "Choropleth Map",
    description: "A data visualization, using choropleth design.",
    technologies: ["JavaScript", "D3"],
    code: "https://codepen.io/ChristianVillamin/pen/pXBLXq",
    demo: "https://codepen.io/ChristianVillamin/full/pXBLXq",
  },
]

type TProject = {
  title: string
  description: string
  technologies: string[]
  code: string
  demo: string
}[]

const Projects: React.FC = () => {
  const projects1: TProject = [
    {
      title: "Tribute Page",
      description: "A tribute to Walter White from Breaking Bad.",
      technologies: ["HTML5", "CSS3", "Flexbox", "Grid"],
      code: "https://codepen.io/ChristianVillamin/pen/wLwQGP",
      demo: "https://codepen.io/ChristianVillamin/full/wLwQGP",
    },
    {
      title: "Biplane Landing Page",
      description: "A fun page I made for my likes of biplanes.",
      technologies: ["HTML5", "CSS3", "Flexbox", "Grid"],
      code: "https://codepen.io/ChristianVillamin/pen/KjwLdp",
      demo: "https://codepen.io/ChristianVillamin/full/KjwLdp",
    },
  ]

  const projects2: TProject = [
    {
      title: "Calculator",
      description: "A calculator. Part of freeCodeCamp project.",
      technologies: ["ES6+", "React", "Hooks"],
      code: "https://codepen.io/ChristianVillamin/pen/rEdVXo",
      demo: "https://codepen.io/ChristianVillamin/full/rEdVXo",
    },
    {
      title: "Mini-Piano",
      description: "A virtual 12-keys piano. (Includes 3 songs!)",
      technologies: ["ES6+", "React", "Hooks"],
      code: "https://codepen.io/ChristianVillamin/pen/EBQvpo",
      demo: "https://codepen.io/ChristianVillamin/full/EBQvpo",
    },
    {
      title: "Podomoro Clock",
      description: "A productivity app for study and health.",
      technologies: ["ES6+", "React", "Hooks"],
      code: "https://codepen.io/ChristianVillamin/pen/ydjajy",
      demo: "https://codepen.io/ChristianVillamin/full/ydjajy",
    },
  ]

  return (
    <Container>
      <h1>* LEARNING PROJECTS</h1>

      <p>
        I'm a big advocate of learning by doing. You apply the knowledge
        yourself, the thinking, the solving, the creativity, the debugging, etc.
        Really gets your brain to think hard and drill it in than just following
        someone's code. This is why I love freeCodeCamp, you get the creative
        freedom on how you will tackle it. You are just given requirements for
        you to fulfill and pass.
      </p>

      <h5>Visit the projects section of my first portfolio site.</h5>

      <a
        href="http://codekcv.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        codekcv.github.io
      </a>

      {/* <div className="projects">
        {projects1.map(project => (
          <div className="project">
            <p className="title">
              {project.title}
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                demo
              </a>

              <a href={project.code} target="_blank" rel="noopener noreferrer">
                code
              </a>
            </p>

            <p className="description">{project.description}</p>

            <ul>
              {project.technologies.map(technology => (
                <li>{technology}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </Container>
  )
}

export default Projects
