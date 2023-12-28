import React from "react"

import Layout from "../../components/layout/layout"
import CV from "../../components/cv/cv-container"
import SEO from "../../components/seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Curriculum Vitae" />
    <CV />
  </Layout>
)

export default IndexPage
