import * as React from "react"
import styled from "styled-components"

const Container = styled.div``

const Blogs: React.FC = () => (
  <Container>
    <h1>* Blogs</h1>
    <a
      className="article"
      href="https://www.hov.co/blog/post/ill-tell-you-6-specific-things-to-stop-doing-and-win-at-life-could-be-offensive"
      target="_blank"
      rel="noopener noreferrer"
    >
      How to win at live. Could be offensive.
    </a>
    <p>More to come... tech & non-tech</p>
  </Container>
)

export default Blogs
