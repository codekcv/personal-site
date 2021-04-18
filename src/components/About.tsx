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
      i'm a software engineer specializing on the front-end. loves winning.
      coding god and tinker lord. i don't play games but i play sometimes.
      memes. piano. cats. coffee. immortality. no interest in politics and
      religion, i respect your view. nature is life. detective conan fanboi.
      happy kid :)
    </p>
  </Container>
)

export default About
