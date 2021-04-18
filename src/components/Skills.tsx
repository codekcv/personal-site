import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
  > .skill {
    margin-bottom: 1rem;
  }
`

const skills: { category: string; technologies: string[] }[] = [
  {
    category: "Front-End",
    technologies: [
      "HTML",
      "CSS",
      "ES6+",
      "TypeScript",
      "React(pro)",
      "GatsbyJS(pro)",
      "NextJS(pro)",
      "vue(noob)",
      "styled-components",
      "sass",
      "Framer Motion",
      "tailwindCSS",
      "chakra",
    ],
  },
  {
    category: "State Management (local)",
    technologies: [
      "Redux / RTK (large app)",
      "Recoil (medium app)",
      "Zustand (small - medium app)",
      "Context API (component scope)",
    ],
  },
  {
    category: "State Management (network)",
    technologies: [
      "Apollo GraphQL (large app)",
      "react-query (small-medium app)",
      "SWR (small app)",
    ],
  },
  {
    category: "Back-End",
    technologies: [
      "NodeJS",
      "TypeScript",
      "Express",
      "JWT",
      "socket.io",
      "Prisma",
      "Nexus",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "RESTful",
    ],
  },
  {
    category: "Testing",
    technologies: [
      "Jest",
      "MochaJS",
      "React Testing Library",
      "Cypress (e2e)",
      "Chrome DevTools",
      "console.log :)",
    ],
  },
  {
    category: "Version Control",
    technologies: ["Git & GitHub", "Folder with dates (just kidding)"],
  },
  {
    category: "Tools & Collab",
    technologies: [
      "Slack",
      "Discord",
      "atlassian jira",
      "Trello",
      "VSCode",
      "vim",
      "postman",
    ],
  },
  {
    category: "System",
    technologies: ["Linux (i use arch btw)"],
  },
]

const Skills: React.FC = () => (
  <Container id="skills">
    <h1>* SKILLS AND THINGS</h1>

    {skills.map(skill => (
      <div key={skill.category} className="skill">
        <h2>{skill.category}</h2>

        <ul>
          {skill.technologies.map(technology => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    ))}
  </Container>
)

export default Skills
