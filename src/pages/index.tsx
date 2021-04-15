import * as React from "react"

import Layout from "src/components/Layout"
import SEO from "src/components/SEO"
import Introduction from "src/sections/Introduction"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <Introduction />
  </Layout>
)

export default IndexPage
