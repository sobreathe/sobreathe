// TODO
// icon
// svg logo
// TOC & privacy policy

import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
      <Layout>
          <Hero>
          </Hero>
      </Layout>
  )
}


export const Head = () => <Seo title="Home Page" />

export default IndexPage
