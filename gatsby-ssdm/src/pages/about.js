
import Greeting from "../components/Greeting"
import * as React from 'react'
import {Link} from "gatsby";
import Layout from "../components/layout";
import Seo from '../components/seo'
// Rendering the <Greeting> component
const SayHello = () => {
    return (
        <Layout pageTitle="About page">
        <div>
            <Greeting name="Husa" />
            <Greeting name="sham" />
            <Greeting name="sana" />
            <h1><Link to="../">home</Link> </h1>
        </div>
        </Layout>
    )
}

export default SayHello
export const Head = () => <Seo title={"About Page"}></Seo>

