import * as React from "react"
import Card from "src/components/Card"
import Layout from "src/components/Layout"
import SEO from "src/components/SEO"
import About from "src/sections/About"
import Introduction from "src/sections/Introduction"

const sections = [Introduction, About, About, About, About, About]

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO />

      {sections.map(Section => (
        <Card Component={<Section />} />
      ))}
    </Layout>
  )
}

export default IndexPage
