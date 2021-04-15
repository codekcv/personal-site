import * as React from "react"
import { styled } from "@linaria/react"
import { useStaticQuery, graphql } from "gatsby"
import "./Layout.css"

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
  background-color: white;

  margin: 0 auto;
  max-width: 960px;
  padding: 2rem;
  margin-top: 2rem;

  border: 1px solid gray;
  border-radius: 6px;
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
