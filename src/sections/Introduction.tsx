import * as React from "react"
import { styled } from "@linaria/react"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  > h1 {
    font-size: 2rem;
  }
`

const Introduction: React.FC = () => (
  <Container>
    <StaticImage
      src="../images/my-picture.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
      placeholder="blurred"
    />

    <h1>Hello, I'm Christian</h1>
    <p>I build web sites and web applications.</p>
  </Container>
)

export default Introduction
