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
      margin: 0 0 0.5rem 0;
    }
  }

  > .links-container {
    > .quick-links {
      > ul {
        list-style: none;
        flex-direction: column;
      }
    }

    > .links {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      > .links-container-2 {
        width: 220px;

        display: flex;
        align-items: flex-start;
        flex-direction: column;
        list-style: none;

        > li {
          margin-left: 0.4rem;
        }
      }
    }
  }

  > a {
    margin-top: 0.5rem;
    display: block;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    text-align: center;
    margin-top: 4rem;
    width: 100%;
    padding: 2rem;

    > .links-container {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;

      .quick-links {
        width: 50%;
        text-align: right;
      }

      > .links {
        position: relative;
        width: 50%;
        align-items: flex-start;

        .links-container-2 {
          width: 100%;
          justify-content: flex-start;

          > li {
            margin: 0 0.4rem 0 0;
          }
        }
      }
    }
  }
`

const links: { name: string; url: string }[] = [
  {
    name: "GitHub",
    url: "http://github.com/codekcv",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/codekcv/",
  },
  {
    name: "CodePen",
    url: "https://codepen.io/codekcv",
  },
  {
    name: "dev.to",
    url: "https://dev.to/codekcv",
  },
  {
    name: "freeCodeCamp",
    url: "https://www.freecodecamp.org/codekcv",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC9NkngOuNAcPGfx4Nl3ODgg/videos",
  },
]

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
      <p>I build web sites and web applications.</p>
    </div>

    <div className="links-container">
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

        <ul className="links-container-2">
          {links.map(link => (
            <li key={link.name}>
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <p>This is my simple second portfolio site. My fancier one is here.</p>

    <a href="http://codekcv.github.io/">codekcv.github.io</a>
  </Container>
)

export default Header
