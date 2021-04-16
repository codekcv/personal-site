import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./Layout.css"
import styled from "styled-components"

const theme = {
  space: [
    "0.25rem",
    "0.50rem",
    "0.75rem",
    "1.00rem",
    "1.25rem",
    "1.50rem",
    "1.75rem",
    "2.00rem",
  ],
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 960px;

  > main {
    margin: 2rem;
  }
`

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <main>{children}</main>
    </Container>
  )
}

export default Layout
