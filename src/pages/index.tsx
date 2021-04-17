import * as React from "react"
import styled from "styled-components"
import SEO from "src/components/SEO"
import About from "src/sections/About"
import Skills from "src/sections/Skills"
import Work from "src/sections/Work"
import Programming from "src/sections/Programming"
import WebJourney from "src/sections/WebJourney"
import Projects from "src/sections/Projects"
import Header from "src/components/Header"
import "../../global.css"

const Container = styled.main`
  display: flex;
  width: 800px;
  color: #333;
  margin: 0 auto;

  > .column-left {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 100vh;

    border-right: 3px dotted rgba(50, 100, 100, 0.15);
    padding-right: 2rem;
  }

  > .column-right {
    position: relative;
    width: 540px;
    left: 260px;
    padding-top: 8rem;

    > div {
      padding: 2rem;
      border-bottom: 3px dotted rgba(50, 100, 100, 0.15);
    }
  }

  li {
    margin-left: 1.65rem;
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  @media (max-width: 800px) {
    display: block;
    width: 100%;

    > .column-left {
      position: initial;

      border-right: none;
      padding-right: 0;
      margin-right: 0;
      width: 100%;
      height: auto;
    }

    > .column-right {
      left: 0;
      padding-top: 2rem;
      width: 100%;
    }

    h1 {
      font-size: 5.5vw;
    }

    h2 {
      font-size: 4.5vw;
    }

    p,
    li {
      font-size: 3.75vw;
    }
  }
`

const IndexPage: React.FC = () => {
  return (
    <Container>
      <SEO title="My Portfolio" />

      <section className="column-left">
        <Header />
      </section>

      <section className="column-right">
        <About />
        <Skills />
        <Work />
        <Programming />
        <WebJourney />
        <Projects />
      </section>
    </Container>
  )
}

export default IndexPage
