import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: calc(400px - 4rem);
  overflow: hidden;

  .section-left {
    text-align: center;

    margin-right: 2rem;
    padding-right: 2rem;
    border-right: 1px dashed rgba(0, 0, 0, 0.1);

    > h1 {
      font-size: 1.35rem;
    }

    > p {
      font-size: 0.7rem;
    }
  }
`
const UL = styled.ul`
  margin-bottom: 2rem;

  > li {
    margin-left: 2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const About: React.FC = () => (
  <Container>
    <div className="section-left">
      <StaticImage
        src="../images/my-picture.png"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Christian Villamin's profile picture."
        placeholder="tracedSVG"
        style={{ borderRadius: "50%" }}
      />

      <h1>Christian Villamin</h1>
      <p>I build web sites and web applications.</p>
    </div>

    <div className="section-right">
      <h2>Skills</h2>
      <UL>
        <li>HTML5 / CSS3 / ES6+</li>
        <li>React / NextJS / GatsbyJS</li>
      </UL>
      <h2>Projects</h2>
      <UL>
        <li>
          <a href="https://www.her.vn/">her.vn</a>
        </li>
      </UL>
      <h2>Links</h2>
      <UL className="links">
        <li>
          <a href="http://github.com/codekcv">GitHub</a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/codekcv/">LinkedIn</a>
        </li>

        <li>
          <a href="https://twitter.com/codekcv">Twitter</a>
        </li>
      </UL>
    </div>
  </Container>
)

export default About
