import * as React from "react"
import styled from "styled-components"

const Container = styled.div``

const Skills: React.FC = () => (
  <Container>
    <div className="react">
      <ul>
        <li>NextJS / GatsbyJS</li>
        <li>Redux / Recoil</li>
      </ul>

      <ul>
        <li>styled-components</li>
      </ul>
    </div>
  </Container>
)

export default Skills
