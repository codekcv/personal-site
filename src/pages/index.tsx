import * as React from "react"

import Layout from "src/components/Layout"
import SEO from "src/components/SEO"
import About from "src/sections/About"
import Introduction from "src/sections/Introduction"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <Introduction />
    <About />
  </Layout>
)

export default IndexPage
