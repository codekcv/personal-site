import * as React from "react"
import styled from "styled-components"

const Container = styled.div``

const Work: React.FC = () => (
  <Container id="work">
    <h1>* WORK EXPERIENCE</h1>

    <h2>
      High Output Ventures (<a href="https://hov.co/">hov.co</a>)
    </h2>

    <p>Dec 2019 - Current | Front-End Developer</p>
    <p>Project I maintained and developed in HOV.</p>
    <p>Project I collaborated in HOV.</p>
    <p>Project I built for HOV.</p>
    <p>I also wrote an article in our HOV site.</p>
  </Container>
)

export default Work
