import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
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

const Header: React.FC = () => (
  <Container>
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
      This is my second portfolio site. See my first one when I was starting out
      with web
    </p>

    <a href="http://codekcv.github.io/">codekcv.github.io</a>
  </Container>
)

export default Header
