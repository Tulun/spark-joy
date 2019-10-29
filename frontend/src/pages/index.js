import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { CentralColumn } from "../components/styles"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CentralColumn>
      <p>This is the body.</p>
    </CentralColumn>
  </Layout>
)

export default IndexPage