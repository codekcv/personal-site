import * as React from "react"
import { styled } from "@linaria/react"

const Container = styled.div`
  > h2 {
    margin-top: 1rem;
  }

  > ul {
    > li {
      margin-left: 2rem;
    }
  }
`

const About: React.FC = () => (
  <Container>
    <h2>Skills</h2>
    <ul>
      <li>HTML5 / CSS3 / ES6+</li>
      <li>React / NextJS / GatsbyJS</li>
    </ul>

    <h2>Projects</h2>
    <ul>
      <li>
        <a href="https://www.her.vn/">her.vn</a>
      </li>
    </ul>

    <h2>Links</h2>
    <ul>
      <li>
        <a href="http://github.com/codekcv">GitHub</a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/codekcv/">LinkedIn</a>
      </li>

      <li>
        <a href="https://twitter.com/codekcv">Twitter</a>
      </li>
    </ul>
  </Container>
)

export default About
