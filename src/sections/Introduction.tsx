import * as React from "react"
import { styled } from "@linaria/react"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  > h1 {
    font-size: 42px;
  }
`

const Introduction: React.FC = () => (
  <Container>
    <h1>Hello, I'm Christian</h1>
    <StaticImage
      src="../images/my-picture.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Container>
)

export default Introduction
