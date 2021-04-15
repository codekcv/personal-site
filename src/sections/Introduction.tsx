import * as React from "react"
import { styled } from "@linaria/react"
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.div`
  text-align: center;

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
      alt="Christian Villamin's profile picture."
      placeholder="tracedSVG"
    />

    <h1>Hello, I'm Christian</h1>
    <p>I build web sites and web applications.</p>
  </Container>
)

export default Introduction
