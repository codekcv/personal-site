import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
  > li {
    margin: 16px 0;
  }
`

const certificates: { title: string; link: string }[] = [
  {
    title: "Responsive Web Design",
    link:
      "https://www.freecodecamp.org/certification/codekcv/responsive-web-design",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    link:
      "https://www.freecodecamp.org/certification/codekcv/javascript-algorithms-and-data-structures",
  },
  {
    title: "Front-End Libraries",
    link:
      "https://www.freecodecamp.org/certification/codekcv/front-end-libraries",
  },
  {
    title: "Data Visualization",
    link:
      "https://www.freecodecamp.org/certification/codekcv/data-visualization",
  },
  {
    title: "APIs and Microservices",
    link:
      "https://www.freecodecamp.org/certification/codekcv/apis-and-microservices",
  },
  {
    title: "Information Security and Quality Assurance",
    link:
      "https://www.freecodecamp.org/certification/codekcv/information-security-and-quality-assurance",
  },
  {
    title: "Full Stack Certification",
    link: "https://www.freecodecamp.org/certification/codekcv/full-stack",
  },
]
const WebJourney: React.FC = () => (
  <Container id="web">
    <h1>* WEB JOURNEY</h1>

    <p>
      I have a big interest in doing web development for a long time. Looking to
      learn, I found{" "}
      <a
        href="https://www.freecodecamp.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        freeCodeCamp
      </a>
      . I finished its curriculum that has an estimated course work of 1800
      hours. I solved 800+ challenges and built a total of 30 projects of my own
      work, passing all unit testing, and submitted to get my certifications in
      the span of{" "}
      <a
        href="https://www.freecodecamp.org/codekvc"
        target="_blank"
        rel="noopener noreferrer"
      >
        3 months
      </a>
      .
    </p>

    <ul>
      {certificates.map(certificate => (
        <li key={certificate.title}>
          <a href={certificate.link} target="_blank" rel="noopener noreferrer">
            {certificate.title}
          </a>
        </li>
      ))}
    </ul>

    <p>
      Having programming background, learning JavaScript(ES6+/Algos/DOM
      Manipulations) was a breeze. Meanwhile, HTML5 & CSS3 are much easier
      languages to learn from having that standpoint.
    </p>

    <p>
      After that, I focused my learning on the latest and greatest web
      technologies;{" "}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        ReactJS
      </a>{" "}
      for the client-side, and{" "}
      <a
        href="https://nodejs.org/en/"
        target="_blank"
        rel="noopener noreferrer"
      >
        NodeJS
      </a>{" "}
      for the server-side. From there, the skills expanded to an environment
      surrounding those two primary technologies.
    </p>

    <p>
      I created a{" "}
      <a
        href="https://twitter.com/villamin_c"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>{" "}
      &{" "}
      <a
        href="https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg"
        target="_blank"
        rel="noopener noreferrer"
      >
        YouTube
      </a>{" "}
      account as a documentation tool for my progress. Joining the{" "}
      <a
        href="https://www.100daysofcode.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        100DaysOfCode
      </a>{" "}
      challenge has been a huge help to my learning, as I was able to relate,
      help, and share thoughts to many people who are also learning web
      development.
    </p>

    <p>
      I got my first job as a front-end developer and from there my skills have
      grown exponentially for doing real work and from being exposed to peers
      with same passion, sharing knowledges in an environment where learning and
      growth is a big value in the company.
    </p>
  </Container>
)

export default WebJourney
