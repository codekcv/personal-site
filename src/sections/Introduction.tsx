import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
  display: flex;

  .section-left {
    margin-right: 1rem;
    border-right: 1px dashed rgba(0, 0, 0, 0.1);
    padding-right: 1rem;

    > h1 {
      font-size: 2rem;
    }
  }
`

const Introduction: React.FC = () => (
  <Container>
    <div className="section-left">
      <StaticImage
        src="../images/my-picture.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Christian Villamin's profile picture."
        placeholder="tracedSVG"
        style={{ borderRadius: "50%" }}
      />

      <h1>Christian Villamin</h1>
      <p>I build web sites and web applications.</p>
    </div>

    <div className="section-right"></div>
  </Container>
)

export default Introduction
