import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "src/components/Layout"
import SEO from "src/components/SEO"
import Introduction from "src/sections/Introduction"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Introduction />
  </Layout>
)

export default IndexPage
