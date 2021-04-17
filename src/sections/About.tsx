import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
  @media (max-width: 800px) {
    p {
      text-align: justify;
    }
  }
`

const About: React.FC = () => (
  <Container id="about">
    <h1>* ABOUT ME AND STUFF</h1>

    <p>
      i'm a software engineer. tinker lord. coding god. immortal. loves winning.
      i don't play games but i play sometimes. dank memes are fun. piano. cats.
      a little design. nature is life. no interest in politics and religion, i
      respect your view. detective conan fanboi. happy kid :)
    </p>
  </Container>
)

export default About
