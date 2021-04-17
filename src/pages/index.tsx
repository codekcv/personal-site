import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "src/components/SEO"
import "../../global.css"
import About from "src/sections/About"
import Skills from "src/sections/Skills"
import Work from "src/sections/Work"
import Programming from "src/sections/Programming"
import WebJourney from "src/sections/WebJourney"
import Projects from "src/sections/Projects"

const Container = styled.div`
  display: flex;
  justify-content: center;

  > main {
    position: relative;
    display: flex;
    width: 800px;
    color: #333;

    > .left-node {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 260px;
      height: 100vh;

      border-right: 3px dotted rgba(50, 100, 100, 0.15);
      padding-right: 2rem;
    }

    > .right-node {
      position: relative;
      max-width: 540px;
      left: 260px;
      padding-top: 8rem;
    }
  }

  li {
    margin-left: 1.65rem;
  }

  @media (max-width: 800px) {
    > main {
      display: block;
      max-width: 540px;

      > .left-node {
        position: initial;

        border-right: none;
        padding-right: none;
        width: 100%;
        height: auto;
      }

      > .right-node {
        left: 0;
        padding-top: 2rem;
        width: 100%;
      }
    }
  }
`

const ColumnLeft = styled.div`
  width: 240px;
  text-align: right;

  > .name {
    font-size: 20px;
    color: #333;
    margin-bottom: 1rem;

    > h1 {
      font-family: Impact, sans-serif;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }

  > .quick-links {
    margin-bottom: 1rem;

    > ul {
      list-style: none;
    }
  }

  > .links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 1rem;

    > .links-container {
      width: 220px;

      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap;

      > a {
        margin-left: 0.5rem;
      }
    }
  }

  > a {
    margin-top: 0.5rem;
    display: block;
  }

  p {
    font-size: 1rem;
  }
`

const ColumnRight = styled.div`
  > div {
    padding: 2rem;
    border-bottom: 3px dotted rgba(50, 100, 100, 0.15);
  }

  h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.4rem;
  }
`

const IndexPage: React.FC = () => {
  return (
    <Container>
      <SEO title="My Portfolio" />

      <main>
        <section className="left-node">
          <ColumnLeft>
            <div className="name">
              <StaticImage
                src="../images/my-picture.png"
                width={200}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="Christian Villamin's profile picture."
                placeholder="tracedSVG"
                style={{ borderRadius: 8 }}
              />
              <h1>CHRISTIAN VILLAMIN</h1>
              <p>
                I build web sites and
                <br />
                web applications.
              </p>
            </div>

            <div className="quick-links">
              <h2>Quick Nav</h2>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#work">Work Exp</a>
                </li>
                <li>
                  <a href="#programming">Prog Exp</a>
                </li>
                <li>
                  <a href="#web">Web Journey</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </div>

            <div className="links">
              <h2>My Links</h2>

              <div className="links-container">
                <a href="http://github.com/codekcv">GitHub</a>
                <a href="https://www.linkedin.com/in/codekcv/">LinkedIn</a>
                <a href="https://twitter.com/codekcv">Twitter</a>
                <a href="https://codepen.io/codekcv">CodePen</a>
                <a href="https://dev.to/codekcv">dev.to</a>
                <a href="https://www.freecodecamp.org/codekcv">freeCodeCamp</a>
                <a href="https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg/videos">
                  YouTube
                </a>
              </div>
            </div>

            <p>
              This is my second portfolio site. See my first one when I was
              starting out with web
            </p>

            <a href="http://codekcv.github.io/">codekcv.github.io</a>
          </ColumnLeft>
        </section>

        <section className="right-node">
          <ColumnRight>
            <About />
            <Skills />
            <Work />
            <Programming />
            <WebJourney />
            <Projects />
          </ColumnRight>
        </section>
      </main>
    </Container>
  )
}

export default IndexPage
