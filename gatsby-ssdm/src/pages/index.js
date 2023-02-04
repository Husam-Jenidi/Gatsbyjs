// Step 1: Import React
import * as React from 'react'
import {Link} from "gatsby";
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";
// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle="Home page">
          <p>Testing the website</p>
          <StaticImage
          alt={"this a photo of dog"}
              src={"https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"}
          ></StaticImage>
      </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Main Page</title>
export default IndexPage
// Step 3: Export your component
//export default IndexPage