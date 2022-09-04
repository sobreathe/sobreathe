import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
      <Layout>
      <main>
        The best app for breathing is coming soon 😍                

      </main>

      </Layout>
  )
}


export const Head = () => <Seo title="Home Page" />

export default IndexPage
